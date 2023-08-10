import { ComponentProps } from "react";

interface SpanProps extends ComponentProps<"span"> {}

export function Title(props: SpanProps) {
  return (
    <div className="w-full h-5 flex leading-[0.8rem] items-center gap-2 mb-[3rem]">
      <span className="flex w-fit font-roboto text-[1.125rem] leading-[0.79rem] font-bold">
        {props.children}
      </span>
      <span className="flex flex-1 h-[0.25rem] bg-blue-primary self-end mb-[4px]"></span>
    </div>
  );
}
