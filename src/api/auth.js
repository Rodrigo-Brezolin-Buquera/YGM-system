import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
import { goToAdmin, goToLogin, goToUser } from "../routes/coordinator";
import { api, auth } from "./config";
import { getHeaders, setStorageItem, deleteStorageItem } from "../utils/storageManager";

export const login = async (form, router) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);

        const {accessToken, uid} = userCredential.user
        setStorageItem("token", accessToken)

        const res = await api.post("/auth/login", {}, getHeaders() ) 
        const userRole = res.data.result.userRole
        setStorageItem("userRole", userRole)

        userRole === "admin" ? goToAdmin(router) : goToUser(router, uid ) 
    } catch (err) {
        // melhorar isso 
        const message = err.message.includes("auth/wrong-password") ? ("Email e/ou senha inválidos") : ("Erro no login, tente novamente")
        throw new Error(message)
    }
};

export const singUp = async ({ email, password, name }) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        const id = user.uid
        // await createItemWithId(usersCol, { email, name, admin: false, active: false }, id)  // axios
        return id
    } catch (err) {
        const message = err.message.includes("auth/email-already-in-use") ? ("Email já cadastrado") : ("Erro na criação, tente novamente")
        throw new Error(message)
    }

};

export const logout = async (router) => {
    await signOut(auth);
    deleteStorageItem("token")
    deleteStorageItem("userRole")
    goToLogin(router); // tirar a lógica daqui
};

export const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email)
}

export const isLogged = async (setStatus) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            setStatus({ loggedIn: true, userId: user.uid });
        } else {
            setStatus({ loggedIn: false, userId: null })
        }
    });

};


