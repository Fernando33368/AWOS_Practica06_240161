/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        blue: "linear-gradient(135deg, #60a5fa, #818cf8)",
        pink: "linear-gradient(135deg, #f472b6, #a78bfa)",
        green: "linear-gradient(135deg, #4ade80, #22c55e)"
      }
    },
  },
  plugins: [],
}

