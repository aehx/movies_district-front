/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    components: true,
  },
  theme: {
   
    extend: {
      screens: {
        "xxs": "320px",
        "xs": "600px",
      },
      variants: {
        display: ["group-hover"],
        visibility: ["group-hover"],
      },
      keyframes: {
        growUp: {
          "0%": { transform: "scale(1.25)" },
          "100%": { transform: "scale(1)" },
        },
        rotate: {
          "0%": { transform: "rotateY(-360deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        progressFluid: {
          "0%": { width: "0px" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        growUp: "growUp 3s ease-in-out forwards",
        rotate: "rotate 0.4s linear",
        progressFluid: "progressFluid 0.5s linear forwards",
      },
    },
  },
  plugins: [],
};
