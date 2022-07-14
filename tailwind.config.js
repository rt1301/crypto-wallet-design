/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      "colors":{
        bgColor:"#0A1018",
        sidebar:"#0D131B",
        goldText:"#F5CEA3",
        darkGoldText:"#E19A4C",
        lightGold:"#BEB4A8",
        primaryText:"#ADABAA",
        "black-shade-1":"#191E26",
        "black-shade-2":"#1C1F22",
        modalBg:"#131619",
        modalText:"#A4A9D6"
      }
    },
  },
  plugins: [],
}
