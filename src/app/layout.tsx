import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter, Montserrat, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Valete",
  description: "Revista Valete",
};

const calistoMT = localFont({
  src: "../fonts/CalistoMT.ttf",
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
        className={`${calistoMT.variable} ${roboto.variable} ${inter.variable} ${montserrat.variable} bg-white-secondary text-black-primary font-calisto`}
      >
        <BackgroundSections />
        {children}
      </body>
    </html>
  );
}

function BackgroundSections() {
  return (
    <div className="flex flex-col absolute w-full -z-10">
      <div className="bg-white-primary h-[92rem]" />
      <div className="bg-white-secondary h-[86rem]" />
      <div className="bg-white-primary h-[405rem]" />
    </div>
  );
}
