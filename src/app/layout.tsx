import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Valete",
  description: "Revista Valete",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white-primary text-black-primary font-calisto">
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
      <div className="bg-white-primary h-[374rem]" />
      <div className="bg-white-secondary h-[80rem]" />
    </div>
  );
}
