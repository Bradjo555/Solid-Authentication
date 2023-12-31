import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAVED-QtfQPSVu9ItktdMy4aUbrUcUDm9c",
    authDomain: "vue-auth-c550d.firebaseapp.com",
    projectId: "vue-auth-c550d",
    storageBucket: "vue-auth-c550d.appspot.com",
    messagingSenderId: "162608904354",
    appId: "1:162608904354:web:d74a6deb9026b894b13ffb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)