/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "AudioWide", "sans-serif"],
      },
      colors: {
        "cod-gray": "#161616",
        "med-purple": "#8556e0",
        "alto": "#dcdcdc",
        "silver": "#bcb9b9",
        "gray": "#8C8C8C",
        "mine-shaft": "#303030",
        "dove-gray": "#636363",
        "cornflower-blue": "#007B88",
        "bkg-purple": "#403347",
        "button-gray": "#727171",
        "back-gray": "#6C6868"
      },
      theme: {
        borderRadius: {
          BUTTON: '27px'  
        }
      }
    },
  },
  plugins: [],
};
