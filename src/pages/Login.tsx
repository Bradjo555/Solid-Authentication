import { useNavigate } from "@solidjs/router";
import { AiOutlineGoogle } from "solid-icons/ai";
import { Show, createSignal } from "solid-js";
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import { auth } from "../firebase/config";

const Login = () => {
    const [email, setEmail]       = createSignal<string>("");
    const [password, setPassword] = createSignal<string>("");

    const [errMsg, setErrMsg] = createSignal<string>()

    const navigate = useNavigate()
    
    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email(), password())
        .then((data) => {
            navigate("/posts");
        }).catch((error) => {
            switch(error.code){
                case "auth/invalid-email":
                    setErrMsg("Invalid email")
                    break;
                case "auth/user-not-found":
                    setErrMsg("No account with that email found")
                    break;
                case "auth/wrong-password":
                    setErrMsg("Incorrect password");
                    break;  
                default:
                    setErrMsg("Email or password was incorrect");
                    break;
            }
        })
    };

    const signInWithGoogle = (e) => {
        e.preventDefault()
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((data) => {
            navigate("/posts");
            alert("You have been succesfully signed in")
        }).catch((error) => {
            console.log(error)
            alert("There was an error")
        })
    }

    return (
        <form class="flex flex-col gap-5 border border-elevation-1 w-96 mx-auto p-5">
            <h1 class="text-center font-bold text-xl">Sign in to an Account</h1>
            <div>
                <label class="block" for="email">Email</label>
                <input 
                oninput={(event) => setEmail(event.target.value)}  
                class="border rounded-md p-3 w-full text-dark bg-transparent border-elevation-1" 
                id="email" placeholder="Email" 
                type="email" />
            </div>
            <div>
                <label class="block" for="password">Password</label>
                <input 
                oninput={(event) => setPassword(event.target.value)}
                class="border rounded-md p-3 w-full text-dark bg-transparent border-elevation-1" 
                id="password" 
                placeholder="Password" 
                type="password" />
            </div>
            <Show when={errMsg()}><p class="text-red-500">{errMsg().toString()}</p></Show>
            <button class="bg-[#E61046] hover:opacity-80 transition-all  active:scale-95 px-5 py-3 font-bold rounded-md text-light" onclick={signIn}>Sign in</button>
            <button class="bg-[#7805CD] hover:opacity-80 transition-all  active:scale-95 px-5 py-3 font-bold rounded-md text-light flex items-center justify-center gap-3" onclick={signInWithGoogle}>
                <AiOutlineGoogle class="w-6 h-6"/>Sign in with google</button>
        </form>
    )
}

export default Login