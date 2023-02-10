import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { goToAdmin, goToLogin, goToUser } from "../routes/coordinator";
import { auth, usersCol } from "./config";
import { findItemById } from ".";

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

export const singUp = async (values) => {
    const { user } = await createUserWithEmailAndPassword(auth, values.email, values.password );
    // nodeMailer

    return user.uid
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
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            setStatus({ loggedIn: true, userId: user.uid });
        } else {
            setStatus({ loggedIn: false, userId: null });
        }
    });
};