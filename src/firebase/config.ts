import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey:             import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain:         import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId:          import.meta.env.VITE_PROJECT_ID,
    storageBucket:      import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId:  import.meta.env.VITE_MESSAGINGSENDERID,
    appId:              import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)