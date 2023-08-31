import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        sm: { max: "1197px" },
        "min-sm": { min: "1197px" },
      },
      fontFamily: {
        calisto: ["var(--font-calisto)"],
        roboto: ["var(--font-roboto)"],
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        white: { primary: "#F5F3EC", secondary: "#EDEBE4" },
        black: { primary: "#000000", secondary: "#62615E" },
        blue: { primary: "#B1CEEB", secondary: "#3E6CCA", tertiary: "#2B4475" },
        brown: { primary: "#DBD9D3" },
      },
    },
  },
  plugins: [],
};
export default config;
