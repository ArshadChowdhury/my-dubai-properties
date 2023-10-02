import {
  Inter,
  Asul,
  Grechen_Fuemen,
  Saira,
  Expletus_Sans,
  Montserrat,
  Open_Sans,
  Oswald,
  Poppins,
  Roboto,
  Roboto_Condensed,
  Turret_Road,
  Vidaloka,
} from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const asul = Asul({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-asul",
});

const grechenFuemen = Grechen_Fuemen({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grechen-fuemen",
});

const saira = Saira({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-saira",
});

const expletusSans = Expletus_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-expletus-sans",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
});

const turretRoad = Turret_Road({
  weight: ["200", "300", "400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-turret-road",
});

const vidaloka = Vidaloka({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vidaloka",
});

export {
  inter,
  asul,
  grechenFuemen,
  saira,
  expletusSans,
  montserrat,
  openSans,
  oswald,
  poppins,
  roboto,
  robotoCondensed,
  turretRoad,
  vidaloka,
};
