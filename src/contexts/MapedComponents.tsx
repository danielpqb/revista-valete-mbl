"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  MutableRefObject,
  useEffect,
} from "react";

type MapedComponentsStates = {
  components: object;
  saveComponent: (id: string, ref: MutableRefObject<any>) => void;
  nearestComponent: string;
};

const MapedComponentsContext = createContext({} as MapedComponentsStates);

export const useMapedComponentsContext = () => {
  return useContext(MapedComponentsContext);
};

export function MapedComponentsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [components, setComponents] = useState({});
  const [nearestComponent, setNearestComponent] = useState("");

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      let minDistance = Infinity;
      let nearest = "";
      const comps = components as any;

      if (!comps) return;

      const offset = {
        concept: 0,
        valetecast: 100,
        columnists: comps["valetecast"]?.offsetHeight * 0.55,
        founders: -100,
        doubts: comps["founders"]?.offsetHeight,
      } as any;

      for (const key in comps) {
        const dist = Math.abs(comps[key].offsetTop + offset[key] - scrollY);
        if (dist < minDistance) {
          minDistance = dist;
          nearest = key;
        }
      }

      setNearestComponent(nearest);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [components]);

  function saveComponent(id: string, ref: MutableRefObject<any>) {
    setComponents((old) => {
      const comps = { ...old } as any;
      comps[id] = ref.current;

      return comps;
    });
  }

  const states = {
    components,
    saveComponent,
    nearestComponent,
  };
  return (
    <MapedComponentsContext.Provider value={states}>
      {children}
    </MapedComponentsContext.Provider>
  );
}
