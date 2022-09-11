/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#F7F7F7",
        primaryDark: "#121212",
        secondary: "#D6BF7C",
        secondaryNight: "#FFE81F",
        tertiary: "#872139",
        tertiaryDark: "#B02220",
      },
    },
  },
  plugins: [],
};
