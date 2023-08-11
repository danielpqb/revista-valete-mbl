import { founders } from "@/data/founders";

export function Founders() {
  function sortAndGroupNames(names: string[]) {
    //Sort
    const sortedNames = names.sort();

    //Group
    const groups = {} as any;
    sortedNames.forEach((name) => {
      const firstLetter = name[0].toUpperCase();
      const firstAppearance = !groups[firstLetter];

      if (firstAppearance) groups[firstLetter] = [];
      groups[firstLetter]?.push(name);
    });

    return groups;
  }

  const groupedNames = sortAndGroupNames(founders);
  function groupNamesToJSXArray(groupedNames: object) {
    const array = [] as any;

    for (const key in groupedNames) {
      const group = (groupedNames as any)[key] as string[];

      const jsxGroup = group.map((name, index) => {
        //Name
        return (
          <div
            className="font-roboto"
            key={index}
          >
            {name}
          </div>
        );
      });

      //GroupNames
      array.push(
        <div className="flex flex-col w-[10rem] flex-[1 1 80px]">
          <span className="leading-none text-[2.5rem] font-bold">{key}</span>
          <span className="w-full h-[0.0625rem] bg-black-primary mb-2"></span>
          {jsxGroup}
        </div>
      );
    }

    return array as React.JSX.Element[];
  }

  const jsxArray = groupNamesToJSXArray(groupedNames);
  const approximateHeight = (founders.length * 0.514).toFixed(0);

  //All GroupNames
  return (
    <div
      style={{ maxHeight: `${approximateHeight}rem` }}
      className={`flex flex-col items-center flex-wrap px-14 gap-[2rem]`}
    >
      {jsxArray}
    </div>
  );
}
