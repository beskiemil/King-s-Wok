/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mauve: "#B99095",
        salmon: "#FCB5AC",
        mint: "#B5E5CF",
        tealGreen: "#3D5B59",
        greenGrey: "#00151A",
        orange: "#F56606",
      },
      backgroundImage: {
        "home-banner": "url('/home-banner.webp')",
      },
    },
  },
  plugins: [],
};
