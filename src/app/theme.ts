// Using Third-party packages and providers
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-third-party-packages-and-providers
"use client";

import { createTheme, DEFAULT_THEME } from "@mantine/core";
import localFont from "next/font/local";
import { Bebas_Neue } from "next/font/google";

// Font files can be colocated inside of the `app`

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  preload: true,
});

const enforce = localFont({
  src: "../../public/fonts/enforce/Enforce.ttf",
  display: "swap",
});

const enforceItalic = localFont({
  src: "../../public/fonts/enforce/Enforce-Italic.ttf",
  display: "swap",
});

const industryUltra = localFont({
  src: "../../public/fonts/industry/IndustryTest-Ultra.otf",
  display: "swap",
});

const industryMedium = localFont({
  src: "../../public/fonts/industry/IndustryTest-Medium.otf",
  display: "swap",
});

const industryLight = localFont({
  src: "../../public/fonts/industry/IndustryTest-Light.otf",
  display: "swap",
});

export const theme = createTheme({
  fontFamily: `${industryMedium.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  // primaryColor: "#002859",
  colors: {},
  headings: {
    fontFamily: `${bebasNeue.style.fontFamily}, ${DEFAULT_THEME.headings.fontFamily}`,
  },
  other: {
    statlySportsBlue: "#002859",
    statlySportsLightBlue: "var(--mantine-color-blue-6)" /* #228be6 */,
    statlySportsRed: "#ff0000",
    statlySportsGray: "var(--mantine-color-gray-5)" /* adb5bd */,
    statlySportsFontIndustryLight: `${industryLight.style.fontFamily}`,
    statlySportsFontEnforceItalic: `${enforceItalic.style.fontFamily}`,
    statlySportsFontBebasNeue: `${bebasNeue.style.fontFamily}`,
  },
});
