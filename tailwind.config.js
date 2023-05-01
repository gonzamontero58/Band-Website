/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        delius: "'Delius Unicase', cursive",
        finger: "'Finger Paint', cursive",
        rock: "'Rock Salt', cursive",
        bungee: "'Bungee Hairline', cursive",
        hachi: "'Hachi Maru Pop', cursive",
        rubik: "'Rubik Glitch', cursive;",
        sunrise: "'Waiting for the Sunrise', cursive;",
        roboto: "'Roboto', sans-serif;",
      },
      backgroundImage: {
        prlx1: 'url("../public/imgs/NM_2.JPG")',
        prlx2: 'url("../public/imgs/Gallery-1.JPG")',
        prlx3: 'url("../public/imgs/Gallery-3.JPG")',
        prlx4: 'url("../public/imgs/Bio_4.JPG")',
        prlx5: 'url("../public/imgs/Bio_2.JPG")',
        prlx6: 'url("../public/imgs/Bio_3.jpg")',
        bgMain: 'url("../public/imgs/NM_1.JPG")',
        bgMusic: 'url("../public/imgs/NM_4.JPG")',
        bgMusic2: 'url("../public/imgs/Music-bg.JPG")',
        bgGonza: 'url("../public/imgs/Bio_5.jpg")',
        bgGianca: 'url("../public/imgs/Gianca2.JPG")',
      },
    },
  },
  plugins: [],
};
