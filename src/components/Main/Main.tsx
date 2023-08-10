import { ComponentProps } from "react";
import { Clubs } from "../CardSuits/Clubs";
import { Section } from "./Sections/common/Section";

interface MainProps extends ComponentProps<"main"> {}

export function Main(props: MainProps) {
  return (
    <main className="w-full h-screen flex flex-col m-auto items-center pt-[11rem] gap-[6rem]">
      <Poster />
      <Section.Root
        id="concept"
        title="Conceito"
      >
        <Section.Concept />
      </Section.Root>
      <Section.Root
        id="valetecast"
        title="Valetecast"
      >
        <Section.Valetecast />
      </Section.Root>
    </main>
  );
}

function Poster() {
  return (
    <div className="relative m-auto w-full max-w-6xl">
      <div className="absolute w-[37rem] pl-[6.25rem] pt-[3.5rem]">
        <h1 className="text-white-primary text-[4rem] uppercase leading-[4.8rem] mb-[3rem]">
          A primeira revista de direita do Brasil
        </h1>
        <button className="bg-blue-secondary text-white-primary px-4 py-2 font-semibold font-roboto mb-[0.8rem]">
          Assine a Valete
        </button>
        <div className="text-white-primary flex items-center text-[0.75rem]">
          <span className="font-inter">R$ 150/mês</span>
          <Clubs className="w-5 h-3 fill-white-primary" />
          <span className="font-inter">Renovação automática</span>
        </div>
      </div>
      <img src="/images/img001.svg"></img>
    </div>
  );
}