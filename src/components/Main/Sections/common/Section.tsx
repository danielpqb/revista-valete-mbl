import { ComponentProps } from "react";
import { Title } from "./Title";
import { Concept } from "../contents/Concept";
import { Doubts } from "../contents/Doubts/Doubts";
import { Valetecast } from "../contents/Valetecast/Valetecast";
import { Founders } from "../contents/Founders";
import { Columnists } from "../contents/Columnists/Columnists";
import { Events } from "../contents/Events";

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
  const className = "flex flex-col w-full max-w-6xl " + props.className;
  return (
    <section
      id={props.id}
      className={className}
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
