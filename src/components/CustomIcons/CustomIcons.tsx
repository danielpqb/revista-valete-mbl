import { ComponentProps } from "react";
import { Clubs } from "./svg/Clubs";
import { twMerge } from "tailwind-merge";
import { Diamonds } from "./svg/Diamonds";
import { Spades } from "./svg/Spades";
import { Facebook } from "./svg/Facebook";
import { Hearts } from "./svg/Hearts";
import { AmazonMusic } from "./svg/AmazonMusic";
import { Podcast1 } from "./svg/Podcast1";
import { Podcast2 } from "./svg/Podcast2";
import { Podcast3 } from "./svg/Podcast3";
import { Spotify } from "./svg/Spotify";
import { User } from "./svg/User";

interface DivProps extends ComponentProps<"div"> {}
function Container(props: DivProps) {
  return (
    <div
      className={twMerge("flex items-center justify-center", props.className)}
    >
      {props.children}
    </div>
  );
}

export const CustomIcon = {
  Clubs: (props: DivProps) => {
    return (
      <Container className={props.className}>
        <Clubs />
      </Container>
    );
  },
  Diamonds: (props: DivProps) => {
    return (
      <Container className={props.className}>
        <Diamonds />
      </Container>
    );
  },
  Hearts: (props: DivProps) => {
    return (
      <Container className={props.className}>
        <Hearts />
      </Container>
    );
  },
  Spades: (props: DivProps) => {
    return (
      <Container className={props.className}>
        <Spades />
      </Container>
    );
  },
  Facebook: (props: DivProps) => {
    return (
      <Container className={props.className}>
        <Facebook />
      </Container>
    );
  },
  AmazonMusic: (props: DivProps) => {
    return (
      <Container className={props.className}>
        <AmazonMusic />
      </Container>
    );
  },
  Podcast1: (props: DivProps) => {
    return (
      <Container className={props.className}>
        <Podcast1 />
      </Container>
    );
  },
  Podcast2: (props: DivProps) => {
    return (
      <Container className={props.className}>
        <Podcast2 />
      </Container>
    );
  },
  Podcast3: (props: DivProps) => {
    return (
      <Container className={props.className}>
        <Podcast3 />
      </Container>
    );
  },
  Spotify: (props: DivProps) => {
    return (
      <Container className={props.className}>
        <Spotify />
      </Container>
    );
  },
  User: (props: DivProps) => {
    return (
      <Container className={props.className}>
        <User />
      </Container>
    );
  },
};
