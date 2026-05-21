const canvas = document.getElementById("progressChart");
const ctx = canvas.getContext("2d");

canvas.width = 250;
canvas.height = 120;

const data = [10, 20, 30, 45, 60, 80];
const barWidth = 25;
const gap = 10;

ctx.fillStyle = "#184ab6ff";

data.forEach((value, index) => {
  const x = index * (barWidth + gap);
  const height = value;
  ctx.fillRect(x, canvas.height - height, barWidth, height);
});
