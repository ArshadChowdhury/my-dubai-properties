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
        montserrat: "var(--font-montserrat)",
        openSans: "var(--font-open-sans)",
        oswald: "var(--font-oswald)",
        roboto: "var(--font-roboto)",
        robotoCondensed: "var(--font-roboto-condensed)",
        vidaloka: "var(--font-vidaloka)",
        turretRoad: "var(--font-turret-road)",
        asul: "var(--font-asul)",
        expleteusSans: "var(--font-expletus-sans)",
        popins: "var(--font-poppins)",
        fuemen: "var(--font-grechen-fuemen)",
        saira: "var(--font-saira)",
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
