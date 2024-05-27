import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  flowbite.content(),],
  theme: {
    extend: {
      fontFamily: {
        Poetsen: ['"Poetsen One"', "sans-serif"]
      },
      colors: {
        mainColor:'#DE9D52',
        secondColor:'#813F19'
      }
    },
  },
  plugins: [flowbite.plugin(),],
}

