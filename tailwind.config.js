import flowbite from "flowbite-react/tailwind";
import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  flowbite.content(),
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        Poetsen: ['"Poetsen One"', "sans-serif"]
      },
      colors: {
        mainColor:'#83C5BE',
        secondColor:'#006D77',
        thirdColor: '#2B8C95',
        shadowColor: '#2a292977'
      }
    },
  },
  darkMode: "class",
  plugins: [flowbite.plugin(),nextui()],
}

/* https://fonts.google.com/selection/embed */
/* https://fonts.google.com/selection/embed */