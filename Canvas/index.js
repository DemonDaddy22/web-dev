(function () {
  const canvas = document.getElementById("mainCanvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    /*
    ctx.fillStyle = "rgb(200 0 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgb(0 0 200 / 50%)";
    ctx.fillRect(30, 30, 50, 50);

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();

    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const x = 25 + j * 50; // x coordinate
        const y = 25 + i * 50; // y coordinate
        const radius = 20; // Arc radius
        const startAngle = 0; // Starting point on circle
        const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fillStyle = '#413C7B';
          ctx.fill();
        } else {
          ctx.strokeStyle = '#ED2939';
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctx.fillStyle = `rgb(0 ${Math.floor(255 - 42.5 * i)} ${Math.floor(
          255 - 42.5 * j,
        )})`;
        ctx.fillRect(j * 100, i * 100, 100, 100);
      }
    }
      */

    // draw background
    ctx.fillStyle = "#ffdd00";
    ctx.fillRect(0, 0, 200, 200);
    ctx.fillStyle = "#66cc00";
    ctx.fillRect(200, 0, 200, 200);
    ctx.fillStyle = "#0099ff";
    ctx.fillRect(0, 200, 200, 200);
    ctx.fillStyle = "#ff3300";
    ctx.fillRect(200, 200, 200, 200);
    ctx.fillStyle = "white";

    // set transparency value
    ctx.globalAlpha = 0.2;

    // Draw semi transparent circles
    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      ctx.arc(200, 200, 20 + 20 * i, 0, Math.PI * 2, true);
      ctx.fill();
    }
  }
})();