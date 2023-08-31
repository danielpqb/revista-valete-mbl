interface SidebarsProps {}
export function Sidebars(props: SidebarsProps) {
  return (
    <>
      <div className="flex flex-col w-[1rem] sm:w-[0.5rem] items-center justify-center fixed left-0 top-0 bottom-0 m-auto [&>div]:w-full [&>div]:h-[1.4rem]">
        <div className="bg-blue-tertiary"></div>
        <div className="bg-blue-secondary"></div>
        <div className="bg-blue-primary"></div>
        <div className="bg-blue-tertiary"></div>
        <div className="bg-blue-secondary"></div>
        <div className="bg-blue-primary"></div>
        <div className="bg-blue-tertiary"></div>
        <div className="bg-blue-secondary"></div>
        <div className="bg-blue-primary"></div>
      </div>
      <div className="flex flex-col w-[1rem] sm:w-[0.5rem] items-center justify-center fixed right-0 top-0 bottom-0 m-auto [&>div]:w-full [&>div]:h-[1.4rem]">
        <div className="bg-blue-tertiary"></div>
        <div className="bg-blue-secondary"></div>
        <div className="bg-blue-primary"></div>
        <div className="bg-blue-tertiary"></div>
        <div className="bg-blue-secondary"></div>
        <div className="bg-blue-primary"></div>
        <div className="bg-blue-tertiary"></div>
        <div className="bg-blue-secondary"></div>
        <div className="bg-blue-primary"></div>
      </div>
    </>
  );
}
