// Colors Demo  
// Ruchit Panchal   
// OCT 25Th 2023,
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let rectWidth = 50;
let rectHeight = 20;

let colors = ["#43A103", "#6A7500", "#300322", "#8B0F58", "#891874"]; 



function setup() {
  createCanvas(windowWidth, windowHeight);
  drawcolRGB(width * 0.1); // col at 10% across the cnvas 
  noStroke();
  drawcolHSB(width * 0.4); 
  drawcolCustom(width * 0.7);// col at 40%of the canvas
}

function drawcolCustom(xpos ){
  colorMode(RGB);
  let counter = 0; 
  for (let y = 0; y < height; y += rectHeight) {
    fill(colors[counter % 5 ]);
    rect(xpos, y, rectWidth, rectHeight);
    counter++;
  }
}

  


function drawcolHSB(xpos) {
  colorMode(HSB, 360); //back to default
  for (let y = 0; y < height; y += rectHeight) {
    fill(y/2 % 360, 360, 360);
    rect(xpos, y, rectWidth, rectHeight);
    
  }



}
function drawcolRGB(xpos) {
  colorMode(RGB); // back to thhe default
  for (let y = 0; y < height; y += rectHeight) {
    fill(random(255), random(255), random(255));
    rect(xpos, y, rectWidth, rectHeight);
  }
}
