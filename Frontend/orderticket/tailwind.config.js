/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0px 1px 3px black",
        "4xl": ["0 35px 35px rgba(0, 0, 0, 1)", "0 45px 65px rgba(0, 0, 0, 1)"],
      },
    },
  },
  plugins: [],
  important: true,
};
