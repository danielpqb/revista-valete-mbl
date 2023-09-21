import { MusicPlayerContextProvider } from "@/contexts/MusicPlayer";
import { MapedComponentsContextProvider } from "@/contexts/MapedComponents";
import { ReactNode } from "react";

export default function ContextProviders({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <MapedComponentsContextProvider>
        <MusicPlayerContextProvider>{children}</MusicPlayerContextProvider>
      </MapedComponentsContextProvider>
    </>
  );
}
