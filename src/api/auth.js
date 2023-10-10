import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
import { goToAdmin, goToLogin, goToUser } from "../utils/coordinator";
import { getHeaders, setStorageItem, deleteStorageItem } from "../utils/storageManager";
import { api, auth } from "./config";

export const login = async (form, router) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);

        const { accessToken, uid } = userCredential.user
        setStorageItem("token", accessToken)

        const res = await api.post("/auth/login", {}, getHeaders())
        const userRole = res.data.result.userRole
        setStorageItem("userRole", userRole)

        userRole === "admin" ? goToAdmin(router) : goToUser(router, uid)
    } catch (err) {
        const message = firebaseErrorFilter(err.message)
        throw new Error(message)
    }
};

export const singUp = async ({ email, password, name }, router) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)

        const { accessToken, uid } = userCredential.user
        setStorageItem("token", accessToken)
        setStorageItem("userRole", "user")

        await api.post("/auth/signup", { name }, getHeaders())
        goToUser(router, uid)
    } catch (err) {
        const message = firebaseErrorFilter(err.message)
        throw new Error(message)
    }
};

export const logout = async (router) => {
    await signOut(auth);
    deleteStorageItem("token")
    deleteStorageItem("userRole")
    goToLogin(router);
};

export const sendResetPasswordLink = async (email) => {
    await sendPasswordResetEmail(auth, email)
}

export const isLogged = async (setStatus) => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            setStatus({ loggedIn: true, user });
        } else {
            setStatus({ loggedIn: false, user })
        }
    });

};

export const refreshAuthToken = async (user) => {
    if (user) {
        try {
            const refreshToken = await user.getIdToken(true);
            setStorageItem("token", refreshToken)
        } catch (error) {
            console.error('Error refreshing ID token:', error);
        }
    }
};

const firebaseErrorFilter = (errorMessage) => {
    if(errorMessage.includes("auth/wrong-password")){
        return "Senha inválidos"
    } else if (errorMessage.includes("auth/user-not-found")) {
        return "Email não encontrado"
    } else if (errorMessage.includes("auth/email-already-in-use")) {
        return "Email já cadastrado"
    } else {
         return "Erro, tente novamente" 
    }
}