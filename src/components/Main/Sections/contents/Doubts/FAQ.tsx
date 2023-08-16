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
    <div className="border-[1px] border-blue-secondary">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between bg-blue-secondary h-[3rem] px-[1.375rem] py-[0.5rem] text-white-primary font-semibold leading-normal text-[1.125rem]"
      >
        <p className="flex items-center h-full">{props.answer.title}</p>
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
