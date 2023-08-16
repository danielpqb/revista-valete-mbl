import { ComponentProps } from "react";
import * as ionicons from "react-icons/io5";
import { twMerge } from "tailwind-merge";

interface IonIconProps extends ComponentProps<"div"> {
  name: string;
}
export default function IonIcon(props: IonIconProps) {
  const convertName = () => {
    const array = props.name.split("-");
    const newName = array
      .map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
      })
      .join("");

    return "Io" + newName;
  };

  const DynamicIcon = ionicons[convertName() as keyof typeof ionicons];

  return (
    <div className={twMerge(`flex w-fit h-fit self-center`, props.className)}>
      <DynamicIcon />
    </div>
  );
}
