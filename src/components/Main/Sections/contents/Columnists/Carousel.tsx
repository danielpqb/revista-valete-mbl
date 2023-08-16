"use client";

import IonIcon from "@/components/IonIcon/IonIcon";
import { columnists } from "@/data/columnists";
import { Card } from "./Card";
import { Dispatch, SetStateAction, useState } from "react";

export function Carousel() {
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);
  const lastVisibleIndex = firstVisibleIndex + 3;

  return (
    <div className="flex flex-col items-center gap-[2.5rem] mb-[6rem] select-none">
      <Title />
      <div className="flex relative overflow-hidden justify-center w-[var(--vw)] h-[33.5rem] px-[9%]">
        <Arrows
          firstVisibleIndex={firstVisibleIndex}
          setFirstVisibleIndex={setFirstVisibleIndex}
        />
        <div className="flex relative justify-between self-center items-center w-full max-w-6xl h-[28.5rem]">
          {columnists.map((columnist, index) => {
            return (
              <Card
                key={index}
                id={index}
                data={columnist}
                position={index - firstVisibleIndex + 1}
                isVisible={
                  index >= firstVisibleIndex && index <= lastVisibleIndex
                }
                isNextVisible={index === lastVisibleIndex + 1}
                isPreviousVisible={index === firstVisibleIndex - 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <h1 className="text-[2.5rem] leading-[3rem] font-bold">
      Nossos colunistas
    </h1>
  );
}

function Arrows({
  firstVisibleIndex,
  setFirstVisibleIndex,
}: {
  firstVisibleIndex: number;
  setFirstVisibleIndex: Dispatch<SetStateAction<number>>;
}) {
  const minIndex = 0;
  const maxIndex = columnists.length - 4;

  return (
    <>
      {firstVisibleIndex !== minIndex && (
        <button
          onClick={() => {
            setFirstVisibleIndex((old) => Math.max(old - 1, minIndex));
          }}
          className="flex items-center justify-center bg-blue-secondary rounded-full w-[2.5rem] h-[2.5rem] absolute left-[calc(((var(--vw)-72rem)/2)-3rem)] top-[50%] z-10"
        >
          <IonIcon
            className="text-white-primary text-[1.67rem]"
            name="chevron-back"
          />
        </button>
      )}

      {firstVisibleIndex !== maxIndex && (
        <button
          onClick={() => {
            setFirstVisibleIndex((old) => Math.min(old + 1, maxIndex));
          }}
          className="flex items-center justify-center bg-blue-secondary rounded-full w-[2.5rem] h-[2.5rem] absolute right-[calc(((var(--vw)-72rem)/2)-3rem)] top-[50%] z-10"
        >
          <IonIcon
            className="text-white-primary text-[1.67rem]"
            name="chevron-forward"
          />
        </button>
      )}
    </>
  );
}
