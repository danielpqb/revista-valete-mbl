"use client";

import { podcasts } from "@/data/podcasts";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useRef,
  MutableRefObject,
  ComponentRef,
  useMemo,
} from "react";

interface AudioRef extends ComponentRef<"audio"> {}
type PodcastType = (typeof podcasts)[0];
type AudioDataType = {
  duration?: number;
  currentTime?: number;
  percentage?: string;
};
type MusicPlayerStates = {
  podcastPlaying: PodcastType;
  changeTrack: (id: number) => void;
  audioElement: MutableRefObject<AudioRef>;
  audioData: AudioDataType;
  playPause: () => void;
  isPaused: boolean;
  changeCurrentTime: (percentage: number) => void;
};

const MusicPlayerContext = createContext({} as MusicPlayerStates);

export const useMusicPlayerContext = () => {
  return useContext(MusicPlayerContext);
};

export function MusicPlayerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [podcastPlaying, setPodcastPlaying] = useState(podcasts[0]);
  const audioElem = useRef() as MutableRefObject<AudioRef>;
  const [audioData, setAudioData] = useState({
    duration: 0,
    currentTime: 0,
    percentage: "0",
  } as AudioDataType);
  const [isPaused, setIsPaused] = useState(true);

  function updateData() {
    const duration = Math.floor(audioElem.current.duration);
    const currentTime = Math.floor(audioElem.current.currentTime);
    const percentage = ((currentTime / duration) * 100).toFixed(2);

    setAudioData(() => {
      return {
        duration,
        currentTime,
        percentage,
      };
    });
  }

  useMemo(() => {
    if (audioElem.current) {
      audioElem.current.play();
      setIsPaused(false);
    }
  }, [podcastPlaying]);

  function changeTrack(id: number) {
    for (const podcast of podcasts) {
      if (podcast.id === id) {
        audioElem.current.src = podcast.audio;

        setPodcastPlaying(() => {
          return podcast;
        });

        return;
      }
    }
  }

  function playPause() {
    if (audioElem.current.paused) {
      audioElem.current.play();
      setIsPaused(false);
    } else {
      audioElem.current.pause();
      setIsPaused(true);
    }
  }

  function changeCurrentTime(percentage: number) {
    percentage = Math.min(Math.max(percentage, 0), 100);

    const newCurrentTime = Math.floor(percentage * audioElem.current.duration);
    audioElem.current.currentTime = newCurrentTime;
  }

  const states = {
    podcastPlaying,
    changeTrack,
    audioElement: audioElem as any,
    audioData,
    playPause,
    isPaused,
    changeCurrentTime,
  };
  return (
    <MusicPlayerContext.Provider value={states}>
      <audio
        onTimeUpdate={() => {
          updateData();
        }}
        onEnded={() => {
          setIsPaused(true);
        }}
        className="absolute"
        ref={audioElem}
      >
        <source src={podcastPlaying.audio} />
      </audio>
      {children}
    </MusicPlayerContext.Provider>
  );
}
