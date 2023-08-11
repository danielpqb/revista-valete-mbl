import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        calisto: ["Calisto MT"],
        roboto: ["Roboto"],
        inter: ["Inter"],
        montserrat: ["Montserrat"],
      },
      colors: {
        white: { primary: "#F5F3EC", secondary: "#EDEBE4" },
        black: { primary: "#000000" },
        blue: { primary: "#B1CEEB", secondary: "#3E6CCA", tertiary: "#2B4475" },
        brown: { primary: "#DBD9D3" },
      },
    },
  },
  plugins: [],
};
export default config;
