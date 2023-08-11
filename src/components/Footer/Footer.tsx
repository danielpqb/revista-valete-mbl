import { ComponentProps } from "react";
import { Spades } from "../CardSuits/Spades";
import { Hearts } from "../CardSuits/Hearts";
import { Diamonds } from "../CardSuits/Diamonds";
import { Clubs } from "../CardSuits/Clubs";

interface FooterProps extends ComponentProps<"footer"> {}

export function Footer(props: FooterProps) {
  return (
    <footer className="flex w-full h-[14rem] bg-black-primary text-white-primary">
      <div className="flex w-full items-center justify-between max-w-6xl m-auto">
        <img
          className="h-[5rem]"
          src="/images/img004.svg"
        ></img>
        <div className="flex flex-col gap-[3rem]">
          <h1 className="w-[20rem] tracking-[0.075rem] text-[1.5rem] font-normal leading-[1.8rem] uppercase text-center">
            A primeira revista de direita do Brasil
          </h1>
          <div className="flex opacity-40 gap-[1rem]">
            <img
              className="w-[3rem]"
              src="/images/mbl-logo.svg"
            ></img>
            <span className="font-normal text-[0.75rem] font-montserrat">
              ©2023 | MBL - Movimento Brasil Livre
            </span>
            <div className="flex items-center fill-white-primary">
              <Spades className="w-[0.75rem]" />
              <Hearts className="w-[0.75rem]" />
              <Diamonds className="w-[0.75rem]" />
              <Clubs className="w-[0.75rem]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <h1 className="w-[11rem] font-roboto text-[1.125rem] font-medium leading-[1.35rem]">
            Assine a Valete e nos siga nas redes
          </h1>
          <div className="flex fill-white-primary gap-[1rem]">
            <Spades className="w-5" />
            <Spades className="w-5" />
            <Spades className="w-5" />
            <Spades className="w-5" />
            <Spades className="w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
