/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        vidaloka: ["Vidaloka", "serif"],
        turretRoad: ["Turret Road", "cursive"],
        asul: ["Asul", "sans-serif"],
        expleteusSans: ["Expletus Sans", "cursive"],
        popins: ["Poppins", "sans-serif"],
        fuemen: ["Grechen Fuemen", "cursive"],
        saira: ["Saira", "sans-serif"],
      },
      colors: {
        brand: "#283646",
      },
      backgroundImage: {
        footer: "url('/images/global/footer-bg.png')",
        investment: "url('/images/global/investment.png')",
        hero: "url('/images/home/hero-background.png')",
        payment: "url('/images/global/Group(1).png')",
        illustration: "url('/images/home/Off Plan Illustration.png')",
        about: "url('/images/about/bg-about.png')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
