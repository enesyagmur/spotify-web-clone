/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spotifyTheme: "#121212",
        lightBg: "#121212",
        textColor: "#B3B3B3",
        logoColor: "#1DC85A",
      },
    },
  },
  plugins: [],
};
