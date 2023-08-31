"use client";

import IonIcon from "@/components/IonIcon/IonIcon";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";

interface DivProps extends ComponentProps<"div"> {
  answer: { title: string; text: string };
  isOpen?: boolean;
}
export function FAQ(props: DivProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-[1px] border-blue-secondary cursor-pointer h-fit">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-blue-secondary min-h-[3rem] h-fit px-[1.375rem] py-[0.5rem] text-white-primary font-semibold leading-normal text-[1.125rem] sm:px-[1.5rem] sm:text-[0.875rem]"
      >
        <p className="flex items-center h-full pr-[1rem]">
          {props.answer.title}
        </p>
        <IonIcon
          name="chevron-down-outline"
          className={twMerge(
            `text-[1.375rem] fill-white-primary]`,
            isOpen ? "rotate-180" : ""
          )}
        />
      </div>
      {isOpen && props.answer.text && (
        <div className="h-fit p-5">
          <p>{props.answer.text}</p>
        </div>
      )}
    </div>
  );
}
