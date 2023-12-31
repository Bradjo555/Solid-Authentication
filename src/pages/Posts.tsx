import { onMount } from "solid-js"
import { auth } from "../firebase/config"
import { useNavigate } from "@solidjs/router"
import { onAuthStateChanged } from "firebase/auth"
const Posts = () => {

    const getCurrentUser = () => {
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

    const navigate = useNavigate()
    onMount(async () => {
        if(!await getCurrentUser()){
            navigate("/")
            alert("Only registered users are allowed to view posts")
        }
    })
    return (
        <div>
            <h1 class="text-4xl text-center">Posts</h1>
            <p class="text-center opacity-70">Amount of posts: 0</p>
        </div>
    )
}

export default Posts