/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      'ocean': '#16c0b0',
      'leaf': '#84cf6a',
      'mist': '#d8d8d8',
      'midnight': '#39495c',
      'cloud': '#ffffff',
      'purple': '#bb7cd7',
      'gray': '#E5E7EB'
    },
    screens: {
      'md': '860px'
    }
  },
  content: [
    'index.html',
    './src/views/*.{vue,js,ts,jsx,tsx}',
    './src/components/*.{vue,js,ts,jsx,tsx}'
  ],
  plugins: [],
}

