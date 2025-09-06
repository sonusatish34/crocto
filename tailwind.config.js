// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["var(--font-dancing)"],
        Poppins: ["var(--font-poppins)"],
        // Optional: keep these if you still want to use them
        geologica: ["var(--font-geologica)"],
        geist: ["var(--font-geist-sans)"],
        geistMono: ["var(--font-geist-mono)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
