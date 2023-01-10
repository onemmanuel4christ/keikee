/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(224, 224, 238, 0.5)',
        
        'new-bg': 'rgba(217, 217, 217, 0.11);'
      },
     
    },
  },
  plugins: [],
}
