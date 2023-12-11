// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squaresize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  rectMode(CENTER);
  noFill();
  drawRectangles();
  
  
}

function drawRectangles(){
  for(let x =squaresize/2; x<width- squaresize/2; x+= squaresize){
    for(let y = squaresize/2; y<height - squaresize/2; x+= squaresize){
      push(); 
      rotate(radians(10));
      square(x,y,squaresize);
      pop();
    }
  }



}
function draw() {
  background(220);
}