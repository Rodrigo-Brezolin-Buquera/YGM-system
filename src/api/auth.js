import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, signInWithCustomToken } from "firebase/auth";
import { goToAdmin, goToLogin, goToUser } from "../routes/coordinator";
import { auth, usersCol } from "./config";
import { createItemWithId, findItemById } from ".";

export const login = async (form, navigate) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, form.email, form.password);
        const userDoc = await findItemById(usersCol, user.uid)

        userDoc.admin ? goToAdmin(navigate) : goToUser(navigate, user.uid)
    } catch (err) {
        console.log(err.message);
        alert("Login error, try again later");
    }
};

export const singUp = async ({ email, password }) => {
    let id
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    id = user.uid
    await resetPassword(email)
    await signOut(auth)
    await signInWithEmailAndPassword(auth, process.env.REACT_APP_ADMIN_EMAIL, process.env.REACT_APP_ADMIN_PASSWORD)
    await createItemWithId(usersCol, { email, admin: false }, id)
    return id
};

export const logout = async (navigate) => {
    try {
        await signOut(auth);
        goToLogin(navigate);

    } catch (err) {
        console.log(err.message);

    }
};

export const isLogged = async (setStatus) => {

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userDoc = await findItemById(usersCol, user.uid)
            setStatus({ loggedIn: true, userId: user.uid, role: userDoc.admin ? "admin" : "user" });
        } else {
            setStatus({ loggedIn: false, userId: null, role: null })

        }
    });

};

export const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
}

export const genPassword = () => Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2)
