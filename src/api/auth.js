import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { goToAdmin, goToUser } from "../routes/coordinator";
import { auth, usersCol } from "./config";
import { findItemById } from ".";

export const login = async (form, navigate) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, form.email, form.password);
        const userDoc = await findItemById(usersCol, user.uid)
        
        userDoc.admin ? goToAdmin(navigate) : goToUser(navigate, user.uid)
    } catch (err) {
        console.log(err);
        alert("Login error, try again later");

    }
};

export const singUp = async (form, setLoading) => {
    try {
        setLoading(true);
        await createUserWithEmailAndPassword(auth, form.email, form.password);
        setLoading(false);
    } catch (err) {
        console.log(err);
        alert("SingUp error, try again later");
        setLoading(false);

    }
};

export const logout = async () => {
    try {  
        await signOut(auth);
    } catch (err) {
        console.log(err);
        
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