import { MusicPlayerContextProvider } from "@/contexts/MusicPlayer";
import { ReactNode } from "react";

export default function ContextProviders({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <MusicPlayerContextProvider>{children}</MusicPlayerContextProvider>
    </>
  );
}
