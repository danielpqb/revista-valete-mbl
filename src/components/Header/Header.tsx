"use client";

import { sections } from "@/data/sections";
import { ComponentProps, Dispatch, SetStateAction, useState } from "react";
import IonIcon from "../IonIcon/IonIcon";
import { CustomIcon } from "../CustomIcons/CustomIcons";
import NextLink from "next/link";
import { Link } from "react-scroll";

interface HeaderProps extends ComponentProps<"header"> {}
export function Header(props: HeaderProps) {
  const [selectedSection, setSelectedSection] = useState("concept");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile */}
      <header className="flex flex-col w-full fixed z-50 bg-white-primary max-w-[var(--vw)] min-sm:hidden">
        <div className="flex border-b-[0.0625rem] border-b-brown-primary p-[1.2rem] justify-between">
          <img
            src="/images/main-logo.svg"
            className="h-[3rem]"
          />
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <CustomIcon.MenuList className="text-[2rem]" />
          </button>
          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </div>
      </header>

      {/* Desktop */}
      <header className="flex flex-col w-full h-32 fixed z-50 bg-white-primary sm:hidden">
        <img
          src="/images/main-logo.svg"
          className="absolute top-4 left-0 right-0 m-auto"
        />
        <div className="w-full h-24 relative flex justify-center font-roboto font-semibold text-[0.875rem]">
          <div className="w-full max-w-6xl flex justify-end gap-[1.5rem]">
            <div className="flex items-center">
              <NextLink
                href={"https://clube.mbl.org.br/pagamento?off=43uioh"}
                target="_blank"
              >
                <div className="bg-blue-secondary text-white-primary px-4 py-2 active:scale-[0.9] select-none">
                  Assine a Valete
                </div>
              </NextLink>
            </div>
            <NextLink
              href={"https://exclusivo.mbl.org.br/auth/login?redirect=/"}
              target="_blank"
              className="self-center active:scale-[0.9] select-none"
            >
              <div className="flex items-center gap-[0.5rem] h-fit cursor-pointer">
                <CustomIcon.User className="text-[1.25rem]" />
                <button className="">Login</button>
              </div>
            </NextLink>
            <div className="flex items-center">
              <button className="active:scale-[0.9] select-none">
                <IonIcon
                  name="search-outline"
                  className="text-[1.25rem]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center font-normal text-[1rem] sm:hidden">
          {sections.map((section, index) => {
            return (
              <SectionLabel
                section={section}
                key={index}
                className="px-6 border-b-[4px] border-black-primary"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            );
          })}
        </div>
        <div className="border-b-[0.0625rem] border-b-brown-primary"></div>
      </header>
    </>
  );
}

function MobileMenu(props: any) {
  return (
    <>
      <div
        style={{ display: props.isMobileMenuOpen ? "flex" : "none" }}
        className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] filter-[blur(1)]"
      />

      <div
        style={{ display: props.isMobileMenuOpen ? "flex" : "none" }}
        className="fixed flex right-0 top-0 w-[75%] h-full z-10 bg-white-primary flex-col"
      >
        {/* Login and Search */}
        <div className="h-[5.35rem] w-full flex justify-end px-[1.5rem] border-b-[1px] border-b-brown-primary mb-[4.5rem]">
          <button
            onClick={() => {
              props.setIsMobileMenuOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <rect
                x="2.22192"
                y="3.8147e-06"
                width="24"
                height="2"
                transform="rotate(45 2.22192 3.8147e-06)"
                fill="#121212"
              />
              <rect
                x="0.807617"
                y="16.9706"
                width="24"
                height="2"
                transform="rotate(-45 0.807617 16.9706)"
                fill="#121212"
              />
            </svg>
          </button>
        </div>
        <NextLink
          href={"https://exclusivo.mbl.org.br/auth/login?redirect=/"}
          target="_blank"
          className="self-center active:scale-[0.9] select-none"
        >
          <div className="flex items-center gap-[0.5rem] h-fit cursor-pointer">
            <CustomIcon.User className="text-[1.25rem]" />
            <button className="font-bold font-roboto">Login</button>
          </div>
        </NextLink>
        <div className="flex items-center justify-center mt-[2rem] mb-[4.5rem]">
          <button className="active:scale-[0.9] select-none flex">
            <IonIcon
              name="search-outline"
              className="text-[1.25rem]"
            />
            <div className="ml-[0.5rem] font-bold font-roboto">Localizar</div>
          </button>
        </div>

        {/* Sections */}
        <div className="flex flex-1 flex-col items-center font-normal text-[1.125rem] gap-[3rem]">
          {sections.map((section, index) => {
            return (
              <MobileSectionLabel
                section={section}
                key={index}
                className="px-6 border-b-[4px] border-black-primary"
                selectedSection={props.selectedSection}
                setSelectedSection={props.setSelectedSection}
                setIsMobileMenuOpen={props.setIsMobileMenuOpen}
              />
            );
          })}
        </div>

        {/* Button */}
        <div className="flex items-center justify-center mb-[2rem] w-full text-[0.875rem] font-semibold font-roboto">
          <NextLink
            href={"https://clube.mbl.org.br/pagamento?off=43uioh"}
            target="_blank"
            className="w-full mx-[1.5rem] flex text-center"
          >
            <div className="bg-blue-secondary text-white-primary px-4 py-2 active:scale-[0.9] select-none w-full">
              Assine a Valete
            </div>
          </NextLink>
        </div>
      </div>
    </>
  );
}

interface SectionLabelProps extends ComponentProps<"button"> {
  section: { id: string; title: string };
  selectedSection: string;
  setSelectedSection: Dispatch<SetStateAction<string>>;
}
function SectionLabel(props: SectionLabelProps) {
  if (props.section.id === "events") {
    return (
      <NextLink
        href={"https://revistavalete.com/"}
        target="_blank"
        className="h-full"
      >
        <button
          style={{
            borderBottomWidth:
              props.selectedSection === props.section.id ? "0.2rem" : "0rem",
          }}
          onClick={() => {
            props.setSelectedSection(props.section.id);
          }}
          className="px-6 h-full border-black-primary"
        >
          {props.section.title}
        </button>
      </NextLink>
    );
  }

  return (
    <Link
      className="h-full"
      to={props.section.id}
      spy={true}
      smooth={true}
      offset={-180}
      duration={500}
    >
      <button
        style={{
          borderBottomWidth:
            props.selectedSection === props.section.id ? "0.2rem" : "0rem",
        }}
        onClick={() => {
          props.setSelectedSection(props.section.id);
        }}
        className="px-6 h-full border-black-primary"
      >
        {props.section.title}
      </button>
    </Link>
  );
}

function MobileSectionLabel(
  props: SectionLabelProps & { setIsMobileMenuOpen: any }
) {
  if (
    props.section.id === "events" ||
    props.section.id === "founders" ||
    props.section.id === "columnists"
  ) {
    return <></>;
  }

  return (
    <Link
      className=""
      to={props.section.id}
      spy={true}
      smooth={true}
      offset={-120}
      duration={500}
    >
      <button
        onClick={() => {
          props.setSelectedSection(props.section.id);
          props.setIsMobileMenuOpen(false);
        }}
        className="h-fit"
      >
        {props.section.title}
      </button>
    </Link>
  );
}
