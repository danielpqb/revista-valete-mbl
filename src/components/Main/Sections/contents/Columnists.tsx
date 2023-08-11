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
      <div className="">Roulette</div>
    </div>
  );
}
