import { CustomIcon } from "@/components/CustomIcons/CustomIcons";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  id: number;
  data: { name: string; text: string[]; img: string };
  position: number;
  isVisible: boolean;
  isNextVisible: boolean;
  isPreviousVisible: boolean;
}
export function Card(props: CardProps) {
  return (
    <div
      style={{ left: `${(props.position - 1) * 18.375}rem` }}
      className={twMerge(
        "absolute flex flex-col transition-all duration-1000 px-[1rem] pt-[8.5rem] min-w-[16.875rem] max-w-[16.875rem] h-[28.5rem] items-center border-[2px] border-solid rounded-[0.5rem] border-brown-primary gap-[0.75rem]",
        !props.isVisible && "opacity-0",
        props.isNextVisible && "",
        props.isPreviousVisible && ""
      )}
    >
      <img
        src={props.data.img}
        className="rounded-full w-[9rem] absolute top-[-1.75rem] border-[4px] border-solid border-brown-primary"
      />
      <Icons idIndex={props.id} />
      <h1 className="text-[1.375rem] font-bold leading-[1.65rem]">
        {props.data.name}
      </h1>
      <div className="flex flex-wrap items-center text-center font-roboto font-light leading-[1.5rem] text-[1rem]">
        {props.data.text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
}

interface IconProps extends ComponentProps<"div"> {
  idIndex: number;
}
function Icons(props: IconProps) {
  return (
    <>
      <Icon
        idIndex={props.idIndex}
        className="absolute top-[1rem] left-[1rem] text-[2.5rem] text-brown-primary"
      />
      <Icon
        idIndex={props.idIndex}
        className="absolute top-[1rem] right-[1rem] text-[2.5rem] text-brown-primary"
      />
      <Icon
        idIndex={props.idIndex}
        className="absolute bottom-[1rem] left-[1rem] text-[2.5rem] text-brown-primary"
      />
      <Icon
        idIndex={props.idIndex}
        className="absolute bottom-[1rem] right-[1rem] text-[2.5rem] text-brown-primary"
      />
    </>
  );
}

function Icon(props: IconProps) {
  switch (props.idIndex % 4) {
    case 0:
      return <CustomIcon.Spades className={props.className} />;

    case 1:
      return <CustomIcon.Diamonds className={props.className} />;

    case 2:
      return <CustomIcon.Clubs className={props.className} />;

    case 3:
      return <CustomIcon.Hearts className={props.className} />;
  }
}
