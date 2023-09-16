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
        footer: "url('../src/assets/images/global/footer-bg.png')",
        investment: "url('../src/assets/images/global/investment.png')",
        hero: "url('../src/assets/images/home/hero-background.png')",
        payment: "url('../src/assets/images/global/Group(1).png')",
        illustration:
          "url('../src/assets/images/home/Off Plan Illustration.png')",
        about: "url('../src/assets/images/about/bg-about.png')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
