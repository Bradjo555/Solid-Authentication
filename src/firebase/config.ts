import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    authDomain:         "AIzaSyAVED-QtfQPSVu9ItktdMy4aUbrUcUDm9c",
    apiKey:             "vue-auth-c550d.firebaseapp.com",
    storageBucket:      "vue-auth-c550d",
    projectId:          "vue-auth-c550d.appspot.com",
    appId:              "162608904354",
    messagingSenderId:  "1:162608904354:web:d74a6deb9026b894b13ffb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)