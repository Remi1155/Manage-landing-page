/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3603c",
        secondary: "#4b5563"
      },
      // backgroundImage: {
      //   bgSimplify: "url('public/images/bg-simplify-section-desktop.svg')"
      // }
    },
  },
  plugins: [],
}