import { ComponentProps } from "react";
import { Section } from "./Sections/common/Section";
import { CustomIcon } from "../CustomIcons/CustomIcons";
import IonIcon from "../IonIcon/IonIcon";
import NextLink from "next/link";

interface MainProps extends ComponentProps<"main"> {}
export function Main(props: MainProps) {
  return (
    <main className="w-full flex flex-col m-auto items-center pt-[11rem] gap-[6rem] mb-[5rem] sm:w-[90%]">
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
      <div className="absolute w-[37rem] pl-[6.25rem] pt-[3.5rem] sm:w-full sm:p-0 sm:flex sm:flex-col sm:items-center sm:text-center sm:h-full">
        <h1 className="text-white-primary text-[4rem] uppercase leading-[4.8rem] mb-[3rem] sm:px-[11%] sm:text-[2.5rem] sm:leading-[3rem] sm:absolute sm:top-[6%]">
          A primeira revista de direita do Brasil
        </h1>
        <NextLink
          className="sm:absolute sm:bottom-[15%] sm:w-[90%]"
          href={"https://clube.mbl.org.br/pagamento?off=43uioh"}
          target="_blank"
        >
          <div className="flex w-fit bg-blue-secondary text-white-primary px-4 py-2 font-semibold font-roboto mb-[0.8rem] gap-[0.5rem] active:scale-[0.9] select-none sm:m-0 sm:w-full sm:justify-center">
            <h1>Assine a Valete</h1>
            <IonIcon name="arrow-forward"></IonIcon>
          </div>
        </NextLink>
        <div className="text-white-primary flex items-center text-[0.75rem] opacity-40 sm:absolute sm:bottom-[10%]">
          <span className="font-inter">R$ 150/mês</span>
          <CustomIcon.Clubs className="w-3 h-3 mx-2 fill-white-primary" />
          <span className="font-inter">Renovação automática</span>
        </div>
      </div>
      <img
        className="sm:hidden"
        src="/images/poster01/img001.svg"
      ></img>
      <img
        className="min-sm:hidden w-full"
        src="/images/poster01/mobile001.svg"
      ></img>
    </div>
  );
}

function PosterBottom() {
  return (
    <div className="flex relative m-auto w-full max-w-6xl font-roboto text-blue-primary">
      <div className="flex flex-col absolute p-[5.5rem] w-[55%] h-full justify-between items-start sm:w-full">
        <div className="flex justify-center items-end">
          <h1 className="font-calisto text-[3rem] font-bold leading-[3.6rem] text-white-primary">
            Apenas R$ 150,00
          </h1>
          <h2 className="font-calisto text-[1.5rem] font-bold text-white-primary ml-3">
            /mês
          </h2>
        </div>
        <span className="font-inter text-[0.75rem] font-normal mb-[1.5rem]">
          *Renovação automática
        </span>
        <p className="text-[1.125rem] font-light leading-[1.6875rem] mb-[3rem]">
          Receba mensalmente em sua casa a Revista Valete, a única revista de
          cultura e política do país que promete vencer a hegemonia cultural da
          esquerda
        </p>
        <NextLink
          href={"https://clube.mbl.org.br/pagamento?off=43uioh"}
          target="_blank"
        >
          <div className="flex w-fit bg-blue-secondary text-white-primary px-4 py-2 font-semibold font-roboto mb-[0.8rem] gap-[0.5rem] active:scale-[0.9] select-none">
            <h1>Assine a Valete</h1>
            <IonIcon name="arrow-forward"></IonIcon>
          </div>
        </NextLink>
      </div>
      <img src="/images/poster02/photo-blue-bg.png" />
      <img
        className="absolute h-full right-[6rem]"
        src="/images/poster02/revista1.png"
      />
    </div>
  );
}
