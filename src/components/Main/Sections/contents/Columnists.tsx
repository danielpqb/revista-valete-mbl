import { CustomIcon } from "@/components/CustomIcons/CustomIcons";

export function Columnists() {
  return (
    <div className="flex flex-col gap-[4rem]">
      <Brief />
      <Roulette />
    </div>
  );
}

function Brief() {
  return (
    <div className="flex justify-between">
      <p className="flex w-[31rem] flex-col font-light text-[1.125rem] leading-[1.8rem]">
        Contamos com um time de analistas sem precedentes na história da
        imprensa brasileira, oferecendo reflexões aprofundadas sobre os mais
        diversos temas acerca da política nacional e internacional.
      </p>
    </div>
  );
}

function Roulette() {
  return (
    <div className="flex flex-col items-center gap-[2.5rem] mb-[6rem]">
      <h1 className="text-[2.5rem] leading-[3rem] font-bold">
        Nossos colunistas
      </h1>
      <div className="flex w-[var(--vw)] h-[30.5rem] overflow-hidden px-[9%]">
        <div className="flex self-end items-center justify-center w-full h-[28.5rem] gap-[1.875rem]">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="flex flex-col px-[1rem] pt-[8.5rem] max-w-[16.875rem] h-full relative items-center border-[2px] border-solid rounded-[0.5rem] border-brown-primary gap-[0.75rem]">
      <img
        src="/images/columnists/photo001.png"
        className="rounded-full w-[9rem] absolute top-[-1.75rem] border-[4px] border-solid border-brown-primary"
      />
      <CustomIcon.Spades className="absolute top-[1rem] left-[1rem] text-[2.5rem] text-brown-primary" />
      <CustomIcon.Spades className="absolute top-[1rem] right-[1rem] text-[2.5rem] text-brown-primary" />
      <CustomIcon.Spades className="absolute bottom-[1rem] left-[1rem] text-[2.5rem] text-brown-primary" />
      <CustomIcon.Spades className="absolute bottom-[1rem] right-[1rem] text-[2.5rem] text-brown-primary" />
      <h1 className="text-[1.375rem] font-bold leading-[1.65rem]">
        Diogo Chiuso
      </h1>
      <div className="flex flex-wrap items-center text-center font-roboto font-light leading-[1.5rem] text-[1rem]">
        <p>Escritor e autor do livro “O que restou da Política”.</p>
      </div>
    </div>
  );
}
