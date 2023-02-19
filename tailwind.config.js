/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        podkova: ["'Podkova'", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
