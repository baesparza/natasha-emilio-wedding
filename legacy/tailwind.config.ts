import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      lavender: {
        DEFAULT: '#86778c'
      },
      rosewood: {
        DEFAULT: '#c6939b'
      },
      beige: {
        DEFAULT: '#d4b2a0'
      },
      white: {
        DEFAULT: '#ffffff',
        bride: '#faf9ee',
      },
      oliveGreen: {
        DEFAULT: '#436038'
      },
      black: {
        dark: '#000000',
        DEFAULT: '#101010',
        light: '#3f3f3f',
      },
    },
    extend: {
      fontFamily: {
        parisienne: ["Parisienne", 'cursive'],
        baskervville: ["Baskervville SC", 'serif'],
        montserrat: ["Montserrat", 'sans-serif'],
      },
    },
  },

  plugins: [],
};
export default config;
