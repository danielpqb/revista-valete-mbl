import { CustomIcon } from "@/components/CustomIcons/CustomIcons";
import IonIcon from "@/components/IonIcon/IonIcon";

export function Valetecast() {
  return (
    <div className="flex flex-col gap-[4rem]">
      <Brief />
      <List />
    </div>
  );
}

function Brief() {
  return (
    <div className="flex justify-between">
      <p className="flex w-[31rem] flex-col font-light text-[1.125rem] leading-[1.8rem]">
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

function List() {
  return (
    <div className="flex flex-col items-center gap-[2.5rem] mb-[6rem]">
      <h1 className="text-[2.5rem] leading-[3rem] font-bold">
        Abaixo a nossa lista de podcasts
      </h1>
      <div className="w-[52rem] h-[50rem] font-bold bg-white-primary rounded-[0.5rem]">
        <div>Head</div>
        <div className="m-3 p-3 border-brown-primary border-[1px]">Podcast</div>
        <div className="m-3 p-3 border-brown-primary border-[1px]">Podcast</div>
        <div className="m-3 p-3 border-brown-primary border-[1px]">Podcast</div>
        <div className="m-3 p-3 border-brown-primary border-[1px]">Podcast</div>
        <div className="m-3 p-3 border-brown-primary border-[1px]">Podcast</div>
        <div className="m-3 p-3 border-brown-primary border-[1px]">Podcast</div>
      </div>
    </div>
  );
}
