/*
 * @name Continous Lines
 * @description Click and drag the mouse to draw a line.
 */
function setup() {
  createCanvas(1000, 1000);
  background(102);
}

function draw() {
  stroke(212, 120, 255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
