import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(auth,
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
            )
    })
}