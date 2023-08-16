import { ComponentProps } from "react";
import { Section } from "./Sections/common/Section";
import { CustomIcon } from "../CustomIcons/CustomIcons";
import IonIcon from "../IonIcon/IonIcon";
import NextLink from "next/link";

interface MainProps extends ComponentProps<"main"> {}
export function Main(props: MainProps) {
  return (
    <main className="w-full flex flex-col m-auto items-center pt-[11rem] gap-[6rem] mb-[5rem]">
      <PosterTop />
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
      <Section.Root
        id="columnists"
        title="Colunistas"
      >
        <Section.Columnists />
      </Section.Root>
      <Section.Root
        id="founders"
        title="Fundadores"
      >
        <Section.Founders />
      </Section.Root>
      <PosterBottom />
      <Section.Root
        id="doubts"
        title="Dúvidas"
      >
        <Section.Doubts />
      </Section.Root>
    </main>
  );
}

function PosterTop() {
  return (
    <div className="relative m-auto w-full max-w-6xl">
      <div className="absolute w-[37rem] pl-[6.25rem] pt-[3.5rem]">
        <h1 className="text-white-primary text-[4rem] uppercase leading-[4.8rem] mb-[3rem]">
          A primeira revista de direita do Brasil
        </h1>
        <NextLink
          href={"https://clube.mbl.org.br/pagamento?off=43uioh"}
          target="_blank"
        >
          <div className="flex w-fit bg-blue-secondary text-white-primary px-4 py-2 font-semibold font-roboto mb-[0.8rem] gap-[0.5rem]">
            <h1>Assine a Valete</h1>
            <IonIcon name="arrow-forward"></IonIcon>
          </div>
        </NextLink>
        <div className="text-white-primary flex items-center text-[0.75rem] opacity-40">
          <span className="font-inter">R$ 150/mês</span>
          <CustomIcon.Clubs className="w-3 h-3 mx-2 fill-white-primary" />
          <span className="font-inter">Renovação automática</span>
        </div>
      </div>
      <img src="/images/poster01/img001.svg"></img>
    </div>
  );
}

function PosterBottom() {
  return (
    <div className="relative m-auto w-full max-w-6xl">
      <img src="/images/img003.svg"></img>
    </div>
  );
}
