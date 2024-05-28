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
        mainColor:'#83C5BE',
        secondColor:'#006D77'
      }
    },
  },
  plugins: [flowbite.plugin(),],
}

/* https://fonts.google.com/selection/embed */