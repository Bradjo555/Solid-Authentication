import { A, useNavigate } from "@solidjs/router"
import ThemeToggleButton from "./ThemeToggleButton"
import { Show, createSignal, onMount } from "solid-js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = createSignal<boolean>(false);

	const navigate = useNavigate()

	onMount(() => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
		setIsLoggedIn(true);
		} 
		else{
		setIsLoggedIn(false);
		}
	});
	});

	const handleSignOut = () => {
		if(confirm("Are you sure you want to sign out?")){
			signOut(auth)
			.then(() => {
				navigate("/")
			})
		}
		else{
			return
		}
	}
    return(
		<nav class="flex gap-5 justify-center mb-32 mt-8">
			<A href="/">Home</A>
			<A href="/register">Register</A>
			<A href="/login">Login</A>
			<A href="/posts">Posts</A>
			<Show when={isLoggedIn()}><button onclick={handleSignOut}>Log out</button></Show>
			<ThemeToggleButton />
		</nav>
    )
}

export default Navbar