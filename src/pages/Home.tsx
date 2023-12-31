import { Show, type Component, createSignal, onMount } from "solid-js"
import { A } from "@solidjs/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config";

const Home: Component = () => {
    const [isLoggedIn, setIsLoggedIn] = createSignal<boolean>(false);


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
    return (
        <div>
            <h1 class="text-4xl font-black text-center">Solid Authentication</h1>
            <Show when={isLoggedIn()} fallback={(<p class="text-center">You are not logged in</p>)}>
                <p class="text-center">You are logged in</p>
            </Show>
            <div class="flex justify-center my-5">
                <A role="button" href="/register" class="w-max bg-[#E61046] px-5 py-3 font-bold text-light rounded-md hover:opacity-70 transition-all active:scale-95">Get started</A>
            </div>
            <div>
                <p class="text-center mt-12 text-xl font-Epilogue">Made using Solidjs and Firebase then deployed to Netlify.</p>
            </div>
        </div>
    )
}

export default Home;