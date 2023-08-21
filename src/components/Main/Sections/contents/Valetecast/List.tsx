"use client";

import IonIcon from "@/components/IonIcon/IonIcon";
import { podcasts } from "@/data/podcasts";
import { Dispatch, SetStateAction, useState } from "react";

export function List() {
  const [podcastIdPlaying, setPodcastIdPlaying] = useState(1);

  return (
    <div className="flex flex-col items-center gap-[2.5rem] mb-[6rem]">
      <h1 className="text-[2.5rem] leading-[3rem] font-bold">
        Abaixo a nossa lista de podcasts
      </h1>
      <div className="flex flex-col w-[52rem] h-fit font-bold bg-white-primary rounded-[0.5rem] font-roboto">
        <Header />
        <div className="flex flex-col h-full overflow-hidden gap-[1rem] my-[1.5rem]">
          {podcasts.map((podcast, index) => {
            return (
              <Podcast
                data={podcast}
                key={index}
                podcastIdPlaying={podcastIdPlaying}
                setPodcastIdPlaying={setPodcastIdPlaying}
              />
            );
          })}
        </div>
        <button className="flex w-fit self-center text-blue-secondary text-[0.875rem] font-semibold justify-center items-center mb-[1.5rem] active:scale-[0.9] select-none">
          <span>Carregar mais</span>
          <IonIcon
            className="text-[1.25rem]"
            name="arrow-down"
          />
        </button>
      </div>
    </div>
  );
}

function Header() {
  const [barWidth, setBarWidth] = useState(0);

  return (
    <div className="flex relative h-[9.75rem]">
      <img
        className="h-full"
        src="/images/podcasts/img001.jpeg"
      />
      <button className="absolute top-[1.27rem] right-[1.27rem] text-[2rem] opacity-60 z-10 active:scale-[0.9] select-none">
        <IonIcon name="ellipsis-horizontal" />
      </button>
      <div className="relative flex flex-col justify-around w-full h-full p-[1rem]">
        <div className="absolute left-0 bottom-0 w-full h-[0.4rem] bg-brown-primary">
          <div
            style={{ width: `${barWidth}%` }}
            className="w-[0px] h-full bg-blue-secondary"
          ></div>
        </div>
        <h1 className="font-semibold text-[1.375rem] leading-[1.65rem] mb-[0.7rem]">
          Valete Spaces - Ep 9: Filmes ANTI - WOKE...
        </h1>
        <h2 className="font-normal text-[0.875rem] leading-[1.05rem] mb-[0.7rem]">
          ValeteCast • 24 de jul. de 2023
        </h2>
        <div className="flex justify-between w-full mb-[0.2rem]">
          <button className="flex justify-center items-center bg-blue-secondary w-[1.875rem] h-[1.875rem] rounded-full active:scale-[0.9] select-none">
            <IonIcon
              className="text-white-primary pl-[2px]"
              name="play-sharp"
            />
          </button>
          <button className="flex justify-center items-center gap-[0.3rem] active:scale-[0.9] select-none">
            <IonIcon
              className="text-black-secondary text-[1.65rem] pl-[2px]"
              name="share-outline"
            />
            <span className="text-black-secondary text-[1rem] leading-[1.2rem] pt-[0.2rem]">
              Compartilhar
            </span>
          </button>
        </div>
        <div className="flex justify-between font-normal leading-[0.9rem] text-black-secondary text-[0.75rem]">
          <span>00:00</span>
          <span>02:19:03</span>
        </div>
      </div>
    </div>
  );
}

interface PodcastProps {
  data: {
    id: number;
    title: string;
    txt: string;
    date: string;
    time: string;
    img: string;
  };
  podcastIdPlaying: number;
  setPodcastIdPlaying: Dispatch<SetStateAction<number>>;
}
function Podcast(props: PodcastProps) {
  return (
    <div className="flex mx-[1.5rem] p-[1.5rem] border-brown-primary border-[1px] rounded-[0.5rem] h-[9.125rem] gap-[1.5rem]">
      {/* Column 01 */}
      <div
        onClick={() => {
          props.setPodcastIdPlaying(props.data.id);
        }}
        className="relative w-[4.125rem] min-w-[4.125rem] object-cover cursor-pointer active:scale-[0.92] select-none"
      >
        {props.podcastIdPlaying === props.data.id && (
          <div className="absolute top-[1.8125rem] left-[-1rem] bg-blue-secondary w-[0.5rem] h-[0.5rem] rounded-full"></div>
        )}
        <div className="flex justify-center items-center absolute top-[1.2rem] left-0 right-0 m-auto w-[1.875rem] h-[1.875rem] bg-white-primary rounded-full">
          <IonIcon
            className="text-black-primary"
            name="play-sharp"
          />
        </div>
        <img
          className="w-full object-cover"
          src={props.data.img}
        />
      </div>

      {/* Column 02 */}
      <div className="flex flex-col gap-[0.5rem]">
        <h1 className="text-[1.125rem] font-semibold leading-[1.35rem]">
          {props.data.title}
        </h1>
        <h2 className="text-[0.875rem] font-normal leading-[1.05rem] opacity-60">
          {props.data.txt}
        </h2>
        <div className="self-start text-[0.875rem] font-semibold leading-[1.05rem] mt-[0.45rem] cursor-pointer active:scale-[0.9] select-none">
          See more
        </div>
      </div>

      {/* Column 03 */}
      <div className="flex flex-col justify-between text-center min-w-fit">
        <h1 className="text-[0.875rem] font-normal leading-[1.05rem] opacity-60">
          {props.data.date}
        </h1>
        <h2 className="text-[0.875rem] font-normal leading-[1.05rem] opacity-60 self-end">
          {props.data.time}
        </h2>
      </div>
    </div>
  );
}
