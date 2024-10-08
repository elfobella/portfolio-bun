/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        head: "rgb(36, 54, 66)",
        primary: "rgb(56, 116, 120)",
        ghost: "rgb(98, 149, 132)",
        beige: "rgb(226, 241, 231)",
        pattern:
          "radial-gradient(#ffffff1a 1.5px, #0000 0), radial-gradient(#ffffff1a 1.5px, #0000 0);",
      },
      fontFamily: {
        work: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
