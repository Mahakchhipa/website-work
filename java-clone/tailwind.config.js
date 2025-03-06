/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    // "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/secondpage/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  backgroundImage: {
    'custom-gradient': 'linear-gradient(270deg, #2929DE 0%, #08083A 100%)',
  },
  theme: {
    screens: {
      'sm': '640px',
     // => @media (min-width: 640px) { ... }

      'md': '768px',
       // => @media (min-width: 768px) { ... }

      'lg': '1024px',
       // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
// => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
     // => @media (min-width: 1536px) { ... }

    },
    extend: {
      colors:{
        'border-opacity-4': 'rgba(255, 255, 255, 0.04)',
           'section1':'#F1F5F9',
           'font-color':'#0F172A',
           'color3':'#4F46E5',
            'sm-circle':'#A855F7',
            'cir-color':'#F59E0B',
            'tiny':'#E0F2FE',
             'new-shape':'#7DD3FC',
             'slider':'#818CF8',
             'techcolor':'#a8a4a4',
             'section2':'#FFFFFF',
             'section3':'#e7e4e4',
      }
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
};

