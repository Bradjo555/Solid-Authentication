import { createEffect, createSignal } from "solid-js";
import { HiSolidMoon } from 'solid-icons/hi'
import { HiSolidSun } from 'solid-icons/hi'

const ThemeToggleButton = () => {
    const [theme, setTheme] = createSignal<string | null>(null);

    const getCurrentTheme = () => {
        return typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    }

    const currentTheme = getCurrentTheme()
    setTheme(currentTheme)

    createEffect(() => {
        if (theme() === "dark"){
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        } else if (theme() === "light") {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
    })

    const handleThemeSwitch = () => {
        const newTheme = theme() === "dark" ? "light" : "dark";
        setTheme(newTheme);
        saveToLocalStorage("theme", newTheme);
    }

    const saveToLocalStorage = (item: string, value: string) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(item, value)
        }
    }

    return (
        <button onclick={handleThemeSwitch}>
            {theme() === "dark" ? <HiSolidMoon class="w-6 h-6"/> : <HiSolidSun class="w-6 h-6" />}
        </button>
    );
};

export default ThemeToggleButton;
