// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let size;
let dpr;
let finalSize = 10;
let startSize;
let startSteps = 4;

function setup() {
  size = window.innerWidth;
  dpr = window.devicePixelRatio;
  createCanvas(size * dpr, size * dpr);
  pixelDensity(dpr);
  strokeWeight(2);
  startSize = size;
  drawRect(0, 0, startSize, startSize, 0, 0, startSteps);
}

function drawRect(x, y, width, height, xMovement, yMovement, steps) {
  noFill();
  rect(x, y, width, height);
  
  if (steps >= 0) {
    let newSize = (startSize) * (steps / startSteps) + finalSize;
    let newX = x + (width - newSize) / 2;
    let newY = y + (height - newSize) / 2;
    drawRect(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
    
  }
}

