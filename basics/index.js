// to make sure canvas is loaded before reaching it as a dom element (real life app)
window.onload = () => {
  console.log("window loaded");
  var canvas1 = document.getElementById("section1");
  var canvas2 = document.getElementById("section2");
  var context1 = canvas1.getContext("2d");
  var context2 = canvas2.getContext("2d");

  // Blue rectangle:
  context1.fillStyle = "blue";
  context1.fillRect(0, 0, 30, 20);

  // Yellow rectangle:
  context1.fillStyle = "yellow";
  context1.fillRect(50, 0, 30, 20);

  // draw a line
  context1.beginPath(); // reset context state
  context1.moveTo(0, 30);
  context1.lineTo(130, 30);
  context1.strokeStyle = "red";
  context1.lineWidth = 1;
  context1.stroke();

  // draw a line caps and line join
  context2.beginPath();
  context2.moveTo(10, 30);
  context2.lineTo(130, 30);
  context2.lineTo(10, 20);
  context2.lineCap = "butt"; //
  context2.lineJoin = "round";
  context2.strokeStyle = "red";
  context2.lineWidth = 1;
  context2.stroke();

  context2.beginPath();
  context2.moveTo(10, 50);
  context2.lineCap = "round";
  context2.lineTo(130, 50);
  context2.lineTo(10, 25);
  context2.strokeStyle = "blue";
  context2.lineWidth = 1;
  context2.stroke();

  context2.beginPath();
  context2.lineCap = "square";
  context2.moveTo(10, 70);
  context2.lineTo(130, 70);
  context2.strokeStyle = "green";
  context2.lineWidth = 1;
  context2.shadowColor = "#333";
  context2.shadowOffsetX = 2;
  context2.shadowOffsetY = 3;
  context2.shaddowBlur = context2.stroke();
};
