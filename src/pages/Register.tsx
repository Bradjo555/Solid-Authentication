import { createSignal } from "solid-js"
import { auth } from "../../config";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AiOutlineGoogle } from 'solid-icons/ai'
import { useNavigate } from "@solidjs/router";

const Register = () => {
    const [email, setEmail]       = createSignal<string>();
    const [password, setPassword] = createSignal<string>();

    const navigate = useNavigate()
    
    const createUser = (e) => {
        e.preventDefault()
        if(!email() || !password()){
            return;
        }

        createUserWithEmailAndPassword(auth, email(), password())
        .then((data) => {
            navigate("/posts");
            alert("You have been succesfully signed in")
        }).catch((error) => {
            console.log(error)
            alert("There was an error")
        })
    };

    const createUserWithGoogle = (e) => {
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
            <h1 class="text-center font-bold text-xl">Create an account</h1>
            <div>
                <label class="block" for="email">Email</label>
                <input 
                oninput={(event) => setEmail(event.target.value)}  
                class="border rounded-md p-3 w-full text-dark bg-transparent dark:text-light border-elevation-1"
                id="email" placeholder="Email" 
                type="email" />
            </div>
            <div>
                <label class="block" for="password">Password</label>
                <input 
                oninput={(event) => setPassword(event.target.value)}
                class="border rounded-md p-3 w-full text-dark bg-transparent dark:text-light border-elevation-1"
                id="password" 
                placeholder="Password" 
                type="password" />
                <p class="opacity-70 font-Epilogue">Must be atleast 6 characters.</p>
            </div>
            <button class="bg-[#E61046] hover:opacity-80 transition-all  active:scale-95 px-5 py-3 font-bold rounded-md text-light" onclick={createUser}>Create account</button>
            <button class="bg-[#7805CD] hover:opacity-80 transition-all  active:scale-95 px-5 py-3 font-bold rounded-md text-light flex items-center justify-center gap-3" onclick={createUserWithGoogle}>
                <AiOutlineGoogle class="w-6 h-6"/>Sign in with google</button>
        </form>
    )
}

export default Register