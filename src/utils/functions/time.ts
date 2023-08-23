export function convertSecondsToTime(seconds: any) {
  seconds = Number(seconds);
  if (Number.isNaN(seconds)) seconds = 0;
  const time = new Date(seconds * 1000).toISOString().slice(11, 19);
  return time;
}
