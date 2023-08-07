/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        friend: "url('assets/Friend_of_the_week.png')",
        question: "url('assets/Question_of_the_week.png')",
        "galaxy-pattern": "url('assets/galaxy.png')",
        astronaut: "url('assets/sadAstronaut.png')",
        previous: "url('assets/previous_background.png')",
      },
      fontFamily: {
        sans: ["IBMPlexSans", "sans-serif"],
        audioWide: ["AudioWide"],
        openSans: ["OpenSans"],
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
        "dark-cyan": "#035A63",
        "register-cyan": "#40ACB8",
        "cornflower-blue": "#007B88",
        blackcurrant: "#403347",
        "bkg-purple": "#403347",
        "button-gray": "#727171",
        "back-gray": "#6C6868",
        "navbar-gray": "#4D4D4D",
        "navbar-components-gray": "#8C8C8C",
        "highlighted-button-blue": "#39E7F9",
        "blue-login": "#06B4C6",
        "light-gray": "#CCCCCC",
        cerulean: "#06B4C6",
      },
    },
  },
  plugins: [],
};
