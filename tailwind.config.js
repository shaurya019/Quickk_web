/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_purple:'#000235',
        btn_primary:'#7e7ee3',
        heading_color:'#abd9d9',
        red_btn:'#ED2B2A',
        green_btn:'#539165',
        blue_btn:'#068DA9',
        head_btn:'#3c61e2',
      },
    },
  },
  plugins: [],
}
