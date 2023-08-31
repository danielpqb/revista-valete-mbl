import { Carousel } from "./Carousel";

export function Columnists() {
  return (
    <div className="flex flex-col gap-[4rem]">
      <Brief />
      <Carousel />
    </div>
  );
}

function Brief() {
  return (
    <div className="flex justify-center">
      <p className="flex w-[31rem] flex-col font-light text-[1.125rem] leading-[1.8rem] text-center">
        Contamos com um time de analistas sem precedentes na história da
        imprensa brasileira, oferecendo reflexões aprofundadas sobre os mais
        diversos temas acerca da política nacional e internacional.
      </p>
    </div>
  );
}
