/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
      },
      colors: {
        // beige: "#FDECBE",
        // dark_beige: "#FBD570",
        dark_blu: "#222B45",
        orange: "#E25525",
        yellow_orange: "#F3A548",
        browny: "#802010",
        /*new colors*/
        blue: "#222B45",
        dark_green: "#333F30",
        light_green: "#627A3F",
        dark_beige: "#C2D379",
        //beige: "#FBFFE6",
        light_brown: "#D1BA79",
        white: "#541515",
        /* 2025 */
        primaryDark: "#391D66",
        primary: "#592DA1",
        primaryLight: "#7E3FE0",
        onPrimaryDark: "#DFCFF7",
        onPrimaryLight: "#D5CAE7",
        secondaryDark: "#F3A310",
        secondary: "#F2BC1B",
        secondaryLight: "#F2D027",
        secondary4Dark: "#FCE8C3",
        /* 2026 */
        lightPink: "#FBAACA",
        darkPink: "#EE0886",
        beige: "#FCEDC5",
        darkBlue: "#25283D",
        mintGreen: "#7ACBAC",
      },
      animation: {
        fadein: 'fadein 0.2s ease 0.5s forwards',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
    fontFamily: {
      gilroy: ['Gilroy', 'sans-serif'],
      mont: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
