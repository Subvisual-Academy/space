/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        friend: "url('assets/Friend_of_the_week.png')",
        question: "url('assets/Question_of_the_week.png')",
      },
      fontFamily: {
        sans: ["OpenSans", "sans-serif"],
        audioWide: ["AudioWide"],
      },
      colors: {
        "cod-gray": "#161616",
        "med-purple": "#8556e0",
        alto: "#dcdcdc",
        silver: "#bcb9b9",
        gray: "#8C8C8C",
        "mine-shaft": "#303030",
        "dove-gray": "#636363",
        "input-purple": "#B27BD0",
        "dark-cyan": "#007B88",
        "register-cyan": "#40ACB8",
        "cornflower-blue": "#007B88",
        blackcurrant: "#403347",
      },
    },
  },
  plugins: [],
};
