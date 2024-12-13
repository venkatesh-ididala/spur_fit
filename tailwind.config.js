/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bg":"rgb(248,248,248)",
        "fill-dark":"rgb(154,149,241)",
        "fill-light":"rgb(233,232,252)",
        "text-dark":"rgb(35,31,32)",
        "text-light":"rgb(204,204,204)",
      }
    },
  },
  plugins: [],
}