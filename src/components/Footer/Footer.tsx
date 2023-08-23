import { ComponentProps } from "react";
import { CustomIcon } from "../CustomIcons/CustomIcons";
import IonIcon from "../IonIcon/IonIcon";
import NextLink from "next/link";

interface FooterProps extends ComponentProps<"footer"> {}
export function Footer(props: FooterProps) {
  return (
    <footer className="flex w-full h-[14rem] bg-black-primary text-white-primary sm:h-fit sm:p-0 sm:pt-[4rem] sm:pb-[2rem]">
      <div className="flex w-full items-center justify-between max-w-6xl m-auto h-full sm:flex-col sm:m-0 sm:gap-[1.5rem]">
        <img
          className="h-[5rem]"
          src="/images/img004.svg"
        ></img>
        <div className="flex flex-col gap-[3rem] self-start pt-[4.5rem] sm:p-0 sm:w-full sm:items-center">
          <h1 className="w-[20rem] tracking-[0.075rem] text-[1.5rem] font-normal leading-[1.8rem] uppercase text-center">
            A primeira revista de direita do Brasil
          </h1>
          <div className="flex opacity-40 gap-[1rem]">
            <img
              className="w-[3rem]"
              src="/images/mbl-logo.svg"
            />
            <span className="font-normal text-[0.75rem] font-montserrat">
              ©2023 | MBL - Movimento Brasil Livre
            </span>
            <div className="flex items-center fill-white-primary gap-[0.3rem]">
              <CustomIcon.Spades className="w-[0.75rem]" />
              <CustomIcon.Hearts className="w-[0.75rem]" />
              <CustomIcon.Diamonds className="w-[0.75rem]" />
              <CustomIcon.Clubs className="w-[0.75rem]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] h-full justify-center">
          <h1 className="w-[11rem] font-roboto text-[1.125rem] font-medium leading-[1.35rem]">
            Assine a Valete e nos siga nas redes
          </h1>
          <div className="flex fill-white-primary gap-[1rem]">
            <NextLink
              href="https://www.facebook.com/mblivre"
              target="_blank"
            >
              <CustomIcon.Facebook className="text-[1.25rem] active:scale-[0.9] select-none" />
            </NextLink>
            <NextLink
              href="https://www.youtube.com/@mblivre"
              target="_blank"
            >
              <IonIcon
                name="logo-youtube"
                className="text-[1.25rem] active:scale-[0.9] select-none"
              />
            </NextLink>
            <NextLink
              href="https://www.instagram.com/mblivre/"
              target="_blank"
            >
              <IonIcon
                name="logo-instagram"
                className="text-[1.25rem] active:scale-[0.9] select-none"
              />
            </NextLink>
            <NextLink
              href="https://twitter.com/MBLivre"
              target="_blank"
            >
              <IonIcon
                name="logo-twitter"
                className="text-[1.25rem] active:scale-[0.9] select-none"
              />
            </NextLink>
            <NextLink
              href="https://www.twitch.tv/mblivre"
              target="_blank"
            >
              <IonIcon
                name="logo-twitch"
                className="text-[1.25rem] active:scale-[0.9] select-none"
              />
            </NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
