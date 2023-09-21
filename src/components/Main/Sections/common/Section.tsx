import { ComponentProps, useEffect, useRef } from "react";
import { Title } from "./Title";
import { Concept } from "../contents/Concept";
import { Doubts } from "../contents/Doubts/Doubts";
import { Valetecast } from "../contents/Valetecast/Valetecast";
import { Founders } from "../contents/Founders";
import { Columnists } from "../contents/Columnists/Columnists";
import { Events } from "../contents/Events";
import { twMerge } from "tailwind-merge";
import { useMapedComponentsContext } from "@/contexts/MapedComponents";

interface SectionProps extends ComponentProps<"section"> {
  title: string;
  id:
    | "concept"
    | "valetecast"
    | "events"
    | "columnists"
    | "founders"
    | "doubts";
}

function Root(props: SectionProps) {
  const { saveComponent } = useMapedComponentsContext();
  const ref = useRef(null);

  useEffect(() => {
    saveComponent(props.id, ref);
  }, []);

  return (
    <section
      id={props.id}
      ref={ref}
      className={twMerge("flex flex-col w-full max-w-6xl", props.className)}
    >
      <Title>{props.title}</Title>
      {props.children}
    </section>
  );
}

export const Section = {
  Root: Root,
  Concept: Concept,
  Valetecast: Valetecast,
  Events: Events,
  Columnists: Columnists,
  Founders: Founders,
  Doubts: Doubts,
};
