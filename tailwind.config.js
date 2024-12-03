import { MdOutlineStayPrimaryPortrait } from "react-icons/md";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e5dff2",
          200: "#cbbfe5",
          300: "#b2a0d9",
          400: "#9880cc",
          500: "#7e60bf",
          600: "#654d99",
          700: "#4c3a73",
          800: "#32264c",
          900: "#191326",
        },
      },
    },
  },
  plugins: [],
};
