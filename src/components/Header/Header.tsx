"use client";

import { sections } from "@/data/sections";
import { ComponentProps, Dispatch, SetStateAction, useState } from "react";
import IonIcon from "../IonIcon/IonIcon";
import { CustomIcon } from "../CustomIcons/CustomIcons";
import { Link } from "react-scroll";

interface HeaderProps extends ComponentProps<"header"> {}
export function Header(props: HeaderProps) {
  const [selectedSection, setSelectedSection] = useState("concept");

  return (
    <header className="w-full h-32 flex flex-col fixed z-10 bg-white-primary">
      <img
        src="/images/main-logo.svg"
        className="absolute top-4 left-0 right-0 m-auto"
      ></img>
      <div className="w-full h-24 relative flex justify-center font-roboto font-semibold text-[0.875rem]">
        <div className="w-full max-w-6xl flex justify-end gap-[1.5rem]">
          <div className="flex items-center">
            <button className="bg-blue-secondary text-white-primary px-4 py-2">
              Assine a Valete
            </button>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <CustomIcon.User className="text-[1.25rem]" />
            <button className="">Login</button>
          </div>
          <div className="flex items-center">
            <button className="">
              <IonIcon
                name="search-outline"
                className="text-[1.25rem]"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
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
  );
}
interface SectionLabelProps extends ComponentProps<"button"> {
  section: { id: string; title: string };
  selectedSection: string;
  setSelectedSection: Dispatch<SetStateAction<string>>;
}
function SectionLabel(props: SectionLabelProps) {
  return (
    <Link
      to={props.section.id}
      spy={true}
      smooth={true}
      offset={-180}
      duration={500}
    >
      <button
        onClick={() => {
          props.setSelectedSection(props.section.id);
        }}
        className={`px-6 h-full ${
          props.selectedSection === props.section.id &&
          "border-b-[0.125rem] border-black-primary "
        }`}
      >
        {props.section.title}
      </button>
    </Link>
  );
}
