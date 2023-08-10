import { ComponentProps } from "react";

interface HeaderProps extends ComponentProps<"header"> {}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full h-32 flex flex-col fixed z-10 bg-white-primary">
      <img
        src="/images/main-logo.svg"
        className="absolute top-4 left-0 right-0 m-auto"
      ></img>
      <div className="w-full h-24 relative flex justify-center font-roboto">
        <div className="w-full max-w-6xl flex justify-end">
          <div className="flex items-center">
            <button className="bg-blue-secondary text-white-primary px-4 py-2">
              Assine a Valete
            </button>
          </div>
          <div className="flex items-center">
            <button className="px-4 py-2 font-semibold">Login</button>
          </div>
          <div className="flex items-center">
            <button className="px-4 py-2 font-semibold">O</button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <span className="px-6">Conceito</span>
        <span className="px-6">Valetecast</span>
        <span className="px-6">Eventos</span>
        <span className="px-6">Colunistas</span>
        <span className="px-6">Fundadores</span>
        <span className="px-6">Dúvidas</span>
      </div>
      <div className="border-b-[0.0625rem] border-b-brown-primary"></div>
    </header>
  );
}
