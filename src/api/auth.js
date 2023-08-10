import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
import { goToAdmin, goToLogin, goToUser } from "../routes/coordinator";
import { auth, usersCol } from "./config";
import { createItemWithId, findItemById } from ".";

export const login = async (form, router) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, form.email, form.password);
        const userDoc = await findItemById(usersCol, user.uid)

        if (typeof window !== "undefined") {
            localStorage.setItem("admin", userDoc.admin)
        }
        userDoc.admin ? goToAdmin(router) : goToUser(router, user.uid)
    } catch (err) {
        const message = err.message.includes("auth/wrong-password") ? ("Email e/ou senha inválidos") : ("Erro no login, tente novamente")
        throw new Error(message)
    }
};

export const singUp = async ({ email, password, name }) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        const id = user.uid
        await createItemWithId(usersCol, { email, name, admin: false, active: false }, id) // isso pode ser bem problematico
        return id
    } catch (err) {
        const message = err.message.includes("auth/email-already-in-use") ? ("Email já cadastrado") : ("Erro na criação, tente novamente")
        throw new Error(message)
    }

};

export const logout = async (router) => {
    await signOut(auth);
    localStorage.setItem("admin", "")
    goToLogin(router);
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


