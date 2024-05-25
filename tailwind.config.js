/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'DM-Sans': ["DM Sans", "sans-serif"]
      },
      colors: {
        'blue-olinger': {
          'c1': '#fdfdff',  
          'c2': '#f7f8ff',  
          'c3': '#eff2fe',  
          'c4': '#e3e8ff',  
          'c5': '#d6ddff',  
          'c6': '#c6cfff',  
          'c7': '#b1bcf7',  
          'c8': '#95a1ee',  
          'c9': '#4749bd',  
          'c10': '#3b38ac',  
          'c11': '#5157c2',  
          'c12': '#262a5f',
        },
        'gray-olinger': {
          'c1': '#fcfcfd',
          'c2': '#f9f9fb',
          'c3': '#f0f0f3',
          'c4': '#e8e8ec',
          'c5': '#e0e0e6',
          'c6': '#d9d9df',
          'c7': '#ceced6',
          'c8': '#babac5',
          'c9': '#8d8d97',
          'c10': '#82828c',
          'c11': '#63636b',
          'c12': '#1f1f24',
       }
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [],
}

