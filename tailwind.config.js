import { MdOutlineStayPrimaryPortrait } from "react-icons/md";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e7ecff",
          200: "#cfdaff",
          300: "#b7c7ff",
          400: "#9fb5ff",
          500: "#87a2ff",
          600: "#6c82cc",
          700: "#516199",
          800: "#364166",
          900: "#1b2033",
        },
      },
    },
  },
  plugins: [],
};
