// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let spacing = 45;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  grid(); 
}



function grid() {

  for (let x = 0; x < width; x += spacing){
    for (let y = 0; y < height; y += spacing){

      point(x,y); 

    }

  }



}
function draw() {
  background(220);
}



