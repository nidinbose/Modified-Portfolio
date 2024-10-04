/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    
  theme: {
    extend: {  keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden"
        },
        "100%": {
          width: "100%"
        }  
      },
      blink: {
        "50%": {
          borderColor: "transparent"
        },
        "100%": {
          borderColor: "white"
        }  
      }
    },
    animation: {
      typing: "typing 4s steps(20) infinite alternate, blink .8s infinite"
    }},
    screens:{
    sm: '640px',
     md: '763px',
      lg: '960px',
       xl: '1200px'
    },
    fontFamily:{
      'mono': ['"jetBrains Mono"','monospace'],

    },
   
  },
  plugins: [],
}

