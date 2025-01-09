/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8b5cf6", // violet-500
          light: "#a78bfa", // violet-400
          dark: "#7c3aed", // violet-600
        },
        secondary: {
          DEFAULT: "#6366f1", // indigo-500
          light: "#818cf8", // indigo-400
          dark: "#4f46e5", // indigo-600
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(139, 92, 246, 0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #8b5cf6, #6366f1)',
        'gradient-secondary': 'linear-gradient(to right, #6366f1, #8b5cf6)',
      },
    },
  },
  plugins: [],
};
