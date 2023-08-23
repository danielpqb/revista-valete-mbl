import { useMusicPlayerContext } from "@/contexts/MusicPlayer";

interface ClickEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {
  target: HTMLDivElement;
}
export function Bar() {
  const { audioData, changeCurrentTime } = useMusicPlayerContext();

  return (
    <div
      onClick={(e: ClickEvent) => {
        const rect = e.target.getBoundingClientRect();
        const clickedWidth = e.clientX - rect.left;
        const maxWidth = e.target.clientWidth;

        const newPercentage = clickedWidth / maxWidth;
        changeCurrentTime(newPercentage);
      }}
      className="absolute left-0 bottom-0 w-full h-[0.4rem] bg-brown-primary"
    >
      <div
        style={{ width: `${audioData.percentage}%` }}
        className="w-[0px] h-full bg-blue-secondary"
      >
        <input
          onChange={(e) => {
            changeCurrentTime(Number(e.target.value) / 100);
          }}
          type="range"
          className="absolute w-full h-full opacity-0"
        />
      </div>
    </div>
  );
}
