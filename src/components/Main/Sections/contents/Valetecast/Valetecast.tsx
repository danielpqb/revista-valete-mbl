import { CustomIcon } from "@/components/CustomIcons/CustomIcons";
import { List } from "./List";

export function Valetecast() {
  return (
    <div className="relative flex flex-col gap-[4rem]">
      <Brief />
      <List />
      <Background />
    </div>
  );
}

function Brief() {
  return (
    <div className="flex justify-between sm:flex-col">
      <p className="flex w-[31rem] flex-col font-light text-[1.125rem] leading-[1.8rem] sm:w-full">
        Toda semana estamos no spaces no Twitter. Com a condução de Pedro
        D’Eyrot, cada space enfrenta um tema contemporâneo trazendo
        especialistas e convidados.
      </p>
      <div className="flex flex-col gap-[1.5rem]">
        <h1 className="flex w-fit font-roboto text-[1.125rem] leading-[1.35rem] font-bold">
          Disponível no
        </h1>
        <div className="flex gap-[3rem]">
          <CustomIcon.AmazonMusic className="text-[1.75rem]" />
          <CustomIcon.Podcast1 className="text-[1.75rem]" />
          <CustomIcon.Podcast2 className="text-[1.75rem]" />
          <CustomIcon.Podcast3 className="text-[1.75rem]" />
          <CustomIcon.Spotify className="text-[1.75rem]" />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white-secondary w-[var(--vw)] h-[calc(100%+13.5rem)] -z-10 left-[calc((var(--vw)-100%)*-0.5)] top-[-13.5rem]"></div>
  );
}
