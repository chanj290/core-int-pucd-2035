/*
 * @name Animation
 * @description The circle moves.
 */
// Where is the circle
let x, y;

function setup() {
  createCanvas(400, 720);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(45, 42, 46);
  
  // Draw a circle
  stroke(249, 232, 255);
  fill(212, 120, 255);
  ellipse(x, y, 24, 24);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

