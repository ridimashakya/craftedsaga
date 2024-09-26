/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontSize: {
        small_font: ['12px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      backgroundImage: {
        'image-2': "url('/src/art1_1.jpeg')",
      },
      colors:{
        'orange': '#d58e54' ,
        'customColor': '#ded6d3', 
      }
    },
  },
  plugins: [],
}

