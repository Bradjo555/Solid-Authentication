import { onMount } from "solid-js"
import { useNavigate } from "@solidjs/router"
import { getCurrentUser } from "../hooks"

const Posts = () => {



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
            <p class="text-center my-2">You are logged in.</p>
            <p class="text-center opacity-70">Amount of posts: 0</p>
        </div>
    )
}

export default Posts