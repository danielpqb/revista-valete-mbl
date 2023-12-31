"use client";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main/Main";
import { Sidebars } from "@/components/Sidebars/Sidebars";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setInterval(() => {
      setCssVariables();
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      <Sidebars />
      <Main />
      <Footer />
    </>
  );
}

function setCssVariables() {
  //--vw
  document.documentElement.style.setProperty(
    "--vw",
    document.documentElement.clientWidth + "px"
  );

  //--vh
  document.documentElement.style.setProperty(
    "--vh",
    document.documentElement.clientHeight + "px"
  );

  //--scrollbarWidth
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  if (scrollbarWidth > 0) {
    document.documentElement.style.setProperty(
      "--scrollbarWidth",
      scrollbarWidth + "px"
    );
  }
}
