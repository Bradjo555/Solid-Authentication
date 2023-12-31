import { type Component } from "solid-js"
import Navbar from "../components/Navbar";
import { TbBrandSolidjs, TbBrandFirebase, TbBrandVercel  } from 'solid-icons/tb'

const Home: Component = () => {
    return (
        <div>
            <h1 class="text-4xl text-center">Home</h1>
            <div>
                <p class="text-center mt-12 text-xl font-Epilogue">Made using Solidjs and Firebase then deployed to Netlify.</p>
            </div>
        </div>
    )
}

export default Home;