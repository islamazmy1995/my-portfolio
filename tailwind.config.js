// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      0: "0",
      45: "45deg",
      90: "90deg",
      135: "135deg",
      180: "180deg",
      270: "270deg",
    },
    extend: {
      fontFamily: {
        Header: ["Lato", "sans-serif"],
        Text2: ["Lato", "sans-serif"],
        About :["Playfair Display", "serif"],
        Arimo: ["Arimo", "sans-serif"],
      },
      colors: {
        AAprimary: "#0b192f",
        AAsecondary: "#64ffda",
        AAError:"#ff6489",
        AAtertiary: "#112340",
        ResumeButtonHover: "#153040",
        MobileNavBarColor: "#112340",
        StartupBackground: "#020c1b",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"),require('tailwind-scrollbar-hide')], 
  variants: {
    scrollbar: ["rounded"],
  },
};

