import { type Component } from "solid-js"
import Navbar from "../components/Navbar";
import { TbBrandSolidjs, TbBrandFirebase, TbBrandVercel  } from 'solid-icons/tb'
import { A } from "@solidjs/router";

const Home: Component = () => {
    return (
        <div>
            <h1 class="text-4xl font-black text-center">Solid Authentication</h1>
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