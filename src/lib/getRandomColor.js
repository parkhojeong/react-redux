export default function getRandomColor() {
  const colors = [
    "#495057",
    "#123057",
    "#495057",
    "#111113",
    "#422227",
    "#495057",
    "#495057",
    "#444547",
    "#495057",
    "#123057",
    "#777357",
    "#123337",
    "#883333",
  ];

  const random = Math.floor(Math.random() * 13);
  return colors[random];
}
