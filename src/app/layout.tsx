import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter, Montserrat, Roboto } from "next/font/google";
import localFont from "next/font/local";
import ContextProviders from "./contexts";

export const metadata: Metadata = {
  title: "Valete",
  description: "Revista Valete",
};

const calistoMT = localFont({
  src: "../assets/fonts/CalistoMT.ttf",
  variable: "--font-calisto",
});
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${calistoMT.variable} ${roboto.variable} ${inter.variable} ${montserrat.variable} bg-white-primary text-black-primary font-calisto`}
      >
        <ContextProviders>{children}</ContextProviders>
      </body>
    </html>
  );
}
