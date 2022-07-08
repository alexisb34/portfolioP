/** @type {import('tailwindcss').Config} */
// const withMt = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ["./src/**/*.{js,jsx}",
  ],
  
  theme: {

    maxWidth: {
      '1/2': '50%',
      '1/3': '33,33%',
      '1/4': '25%',
      '3/4': '75%',
      '60%': '60%',
      '80%': '80%',
      '40%': '40%',
      '30%': '30%',
      'xs': '20rem', /* 320px */
      'sm': '24rem', /* 384px */
      'md': '28rem', /* 448px */
      'lg': '32rem', /* 512px */
      'xl': '36rem', /* 576px */
      '2xl': '42rem', /* 672px */
      '3xl': '48rem', /* 768px */
      '4xl': '56rem', /* 896px */
      '5xl': '64rem', /* 1024px */
      '6xl': '72rem', /* 1152px */
      '7xl': '80rem', /* 1280px */
    },
    extend: {
      fontFamily: {
        made_canvas: ["made_canvas"],
        mind_the_caps: ["mind_the_caps"],
      },
      colors: {
        'my-yellow': '#F2BD00',
        'my-white': '#FFFFFF',
      },
      
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '894px',
      // => @media (min-width: 894px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
  },
  plugins: [],
};
