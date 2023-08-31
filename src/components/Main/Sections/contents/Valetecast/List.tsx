"use client";

import IonIcon from "@/components/IonIcon/IonIcon";
import { useMusicPlayerContext } from "@/contexts/MusicPlayer";
import { podcasts } from "@/data/podcasts";
import { convertSecondsToTime } from "@/utils/functions/time";
import { Dispatch, SetStateAction, useState } from "react";
import { Bar } from "./Bar";

export function List() {
  const [viewLimit, setViewLimit] = useState(3);

  return (
    <div className="flex flex-col items-center gap-[2.5rem] mb-[6rem] sm:mb-[3rem]">
      <h1 className="text-[2.5rem] leading-[3rem] font-bold sm:text-[1.5rem] sm:leading-[1.8rem] sm:px-[10%] sm:text-center">
        Abaixo a nossa lista de podcasts
      </h1>
      <div className="flex flex-col w-[52rem] h-fit font-bold bg-white-primary rounded-[0.5rem] font-roboto sm:w-full">
        <Header />
        <div className="flex flex-col h-full overflow-hidden gap-[1rem] my-[1.5rem]">
          {podcasts.map((podcast, index) => {
            if (index < viewLimit) {
              return (
                <Podcast
                  data={podcast}
                  key={index}
                />
              );
            } else {
              return <></>;
            }
          })}
        </div>
        {viewLimit < podcasts.length && (
          <button
            onClick={() => {
              setViewLimit((old) => {
                return old + 3;
              });
            }}
            className="flex w-fit self-center text-blue-secondary text-[0.875rem] font-semibold justify-center items-center mb-[1.5rem] active:scale-[0.9] select-none"
          >
            <span>Carregar mais</span>
            <IonIcon
              className="text-[1.25rem]"
              name="arrow-down"
            />
          </button>
        )}
      </div>
    </div>
  );
}

function Header() {
  const { podcastPlaying, audioData, playPause, isPaused } =
    useMusicPlayerContext();

  return (
    <div className="flex relative h-[9.75rem] sm:h-fit sm:flex-col">
      <div className="relative aspect-square">
        <img
          className="h-full sm:w-full"
          src={
            podcastPlaying.img
              ? podcastPlaying.img
              : "/images/podcasts/imgDefault.jpeg"
          }
        />
        <button
          onClick={() => {
            playPause();
          }}
          className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 m-auto w-[4rem] h-[4rem] bg-blue-secondary rounded-full opacity-95 min-sm:hidden text-[2.4rem]"
        >
          {isPaused ? (
            <IonIcon
              className="text-white-primary pl-2"
              name="play-sharp"
            />
          ) : (
            <IonIcon
              className="text-white-primary"
              name="pause"
            />
          )}
        </button>
      </div>
      <div className="flex flex-col w-full h-fit min-sm:hidden">
        <Bar />
        <div className="flex flex-row px-[1rem] pt-[0.5rem] mb-[1.5rem] sm:relative sm:pt-[2.5rem]">
          <div className="flex flex-col gap-[1rem] sm:gap-0">
            <div className="flex justify-between font-normal leading-[0.9rem] text-black-secondary text-[0.75rem]">
              <span className="sm:absolute sm:top-[0.5rem] sm:left-[1rem]">
                {convertSecondsToTime(audioData.currentTime)}
              </span>
              <span className="sm:absolute sm:top-[0.5rem] sm:right-[1rem]">
                {podcastPlaying.time}
              </span>
            </div>
            <h1 className="font-semibold text-[1.125rem] leading-[1.35rem] w-full text-ellipsis line-clamp-2 sm:mb-[1rem]">
              {podcastPlaying.title}
            </h1>
            <h2 className="font-normal text-[0.875rem] leading-[1.05rem]">
              ValeteCast • {podcastPlaying.date}
            </h2>
          </div>
          <div className="flex flex-col justify-between">
            <button className="top-[1.27rem] right-[1.27rem] text-[2rem] opacity-60 z-10 active:scale-[0.9] select-none">
              <IonIcon name="ellipsis-horizontal" />
            </button>
            <button className="flex justify-center items-center gap-[0.3rem] active:scale-[0.9] select-none">
              <IonIcon
                className="text-black-secondary text-[1.65rem] pl-[2px]"
                name="share-outline"
              />
            </button>
          </div>
        </div>
      </div>
      <button className="absolute top-[1.27rem] right-[1.27rem] text-[2rem] opacity-60 z-10 active:scale-[0.9] select-none sm:hidden">
        <IonIcon name="ellipsis-horizontal" />
      </button>
      <div className="relative flex flex-col justify-around w-full h-full p-[1rem] sm:hidden">
        <Bar />
        <h1 className="font-semibold text-[1.375rem] leading-[1.65rem] mb-[0.7rem] w-[calc(100%-4rem)] text-ellipsis line-clamp-1">
          {podcastPlaying.title}
        </h1>
        <h2 className="font-normal text-[0.875rem] leading-[1.05rem] mb-[0.7rem]">
          ValeteCast • {podcastPlaying.date}
        </h2>
        <div className="flex justify-between w-full mb-[0.2rem]">
          <button
            onClick={() => {
              playPause();
            }}
            className="flex justify-center items-center bg-blue-secondary w-[1.875rem] h-[1.875rem] rounded-full active:scale-[0.9] select-none"
          >
            {isPaused ? (
              <IonIcon
                className="text-white-primary pl-[2px]"
                name="play-sharp"
              />
            ) : (
              <IonIcon
                className="text-white-primary"
                name="pause"
              />
            )}
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
          <span>{convertSecondsToTime(audioData.currentTime)}</span>
          <span>{podcastPlaying.time}</span>
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
}
function Podcast(props: PodcastProps) {
  const { changeTrack, podcastPlaying } = useMusicPlayerContext();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Desktop */}
      <div
        style={isOpen ? { height: "fit-content" } : {}}
        className="flex mx-[1.5rem] p-[1.5rem] border-brown-primary border-[1px] rounded-[0.5rem] h-[9.125rem] gap-[1.5rem] sm:hidden"
      >
        {/* Column 01 */}
        <div
          onClick={() => {
            changeTrack(props.data.id);
          }}
          className="relative w-[4.125rem] min-w-[4.125rem] object-cover cursor-pointer active:scale-[0.92] select-none"
        >
          {podcastPlaying.id === props.data.id && (
            <div className="absolute top-[1.8125rem] left-[-1rem] bg-blue-secondary w-[0.5rem] h-[0.5rem] rounded-full"></div>
          )}
          <div className="flex justify-center items-center absolute top-[1.2rem] left-0 right-0 m-auto w-[1.875rem] h-[1.875rem] bg-white-primary rounded-full opacity-90">
            <IonIcon
              className="text-black-primary pl-1"
              name="play-sharp"
            />
          </div>
          <img
            className="w-full object-cover"
            src={
              props.data.img
                ? props.data.img
                : "/images/podcasts/imgDefault.jpeg"
            }
          />
        </div>
        {/* Column 02 */}
        <div className="flex flex-col gap-[0.5rem] grow justify-between">
          <h1 className="text-[1.125rem] font-semibold leading-[1.35rem] text-ellipsis line-clamp-1">
            {props.data.title}
          </h1>
          <h2
            style={isOpen ? { display: "block", height: "fit-content" } : {}}
            className="text-[0.875rem] font-normal leading-[1.05rem] opacity-60 w-[30rem] text-ellipsis line-clamp-2"
          >
            {props.data.txt}
          </h2>
          <div
            onClick={() => {
              setIsOpen((old) => {
                return !old;
              });
            }}
            className="self-start text-[0.875rem] font-semibold leading-[1.05rem] mt-[0.45rem] cursor-pointer active:scale-[0.9] select-none"
          >
            {isOpen ? "See less" : "See more"}
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

      {/* Mobile */}
      <div
        style={isOpen ? { height: "fit-content" } : {}}
        className="flex flex-col mx-[1.5rem] p-[1.5rem] border-brown-primary border-[1px] rounded-[0.5rem] h-[13.375rem] min-sm:hidden"
      >
        {/* Row 1 */}
        <div className="flex mb-[0.69rem]">
          {/* Image */}
          <div
            onClick={() => {
              changeTrack(props.data.id);
            }}
            className="relative w-[4.125rem] min-w-[4.125rem] object-cover cursor-pointer active:scale-[0.92] select-none mr-[1rem]"
          >
            {podcastPlaying.id === props.data.id && (
              <div className="absolute top-[1.8125rem] left-[-1rem] bg-blue-secondary w-[0.5rem] h-[0.5rem] rounded-full"></div>
            )}
            <div className="flex justify-center items-center absolute top-[1.2rem] left-0 right-0 m-auto w-[1.875rem] h-[1.875rem] bg-white-primary rounded-full opacity-90">
              <IonIcon
                className="text-black-primary pl-1"
                name="play-sharp"
              />
            </div>
            <img
              className="w-full object-cover"
              src={
                props.data.img
                  ? props.data.img
                  : "/images/podcasts/imgDefault.jpeg"
              }
            />
          </div>
          {/* Title */}
          <div className="flex flex-col gap-[0.5rem] grow">
            <h1 className="text-[0.875rem] font-semibold leading-[1.05rem] text-ellipsis line-clamp-2">
              {props.data.title}
            </h1>
            <h1 className="text-[0.625rem] font-normal leading-[0.75rem] opacity-60">
              {props.data.date}
            </h1>
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex flex-col mb-[1rem]">
          <h2
            style={isOpen ? { display: "block", height: "fit-content" } : {}}
            className="text-[0.75rem] font-normal leading-[1.125rem] opacity-60 text-ellipsis line-clamp-4 w-full"
          >
            {props.data.txt}
          </h2>
        </div>
        {/* Row 3 */}
        <div className="flex justify-between">
          {/* See More */}
          <div
            onClick={() => {
              setIsOpen((old) => {
                return !old;
              });
            }}
            className="self-start text-[0.875rem] font-semibold leading-[1.05rem] cursor-pointer active:scale-[0.9] select-none"
          >
            {isOpen ? "See less" : "See more"}
          </div>
          {/* Date */}
          <div className="flex flex-col justify-between text-center min-w-fit">
            <h2 className="text-[0.75rem] font-normal leading-[0.9rem] opacity-60 self-end">
              {props.data.time}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
