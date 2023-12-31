import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "Lexend" : "Lexend",
        "Epilogue" : "Epilogue",
      },
      colors: {
        "light" : "#e6e5e7",
        "dark"  : "#141414",
        "background-dark"  : "#151515",
        "background-light" : "#FBFBFF",
        "elevation-1"      : "#1D2624",
        "elevation-2"      : "#2B312F",
      }
      },
  },
  plugins: [],
};

export default config;
