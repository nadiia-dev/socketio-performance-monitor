const drawCircle = (canvas, currentLoad) => {
  if (canvas) {
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, 500, 500);
    context.fillStyle = "#ccc";
    context.beginPath();
    context.arc(100, 100, 90, Math.PI * 0, Math.PI * 2);
    context.closePath();
    context.fill();

    context.lineWidth = 10;
    if (currentLoad < 20) {
      context.strokeStyle = "#00ff00";
    } else if (currentLoad < 40) {
      context.strokeStyle = "#337ab7";
    } else if (currentLoad < 60) {
      context.strokeStyle = "#f0ad4e";
    } else {
      context.strokeStyle = "#d9534f";
    }
    context.beginPath();
    context.arc(
      100,
      100,
      95,
      Math.PI * 1.5,
      (Math.PI * 2 * currentLoad) / 100 + Math.PI * 1.5
    );
    context.stroke();
  }
};

export default drawCircle;
