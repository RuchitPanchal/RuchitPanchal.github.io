// Inheritance Demo 
// Ruchit Panchal
// Nove 29 , 2023 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objects = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0 ; i < 10 ; i++){
    objects.push(new AnimateObject(random (width), random(height)));
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}




class AnimateObject{
  constructor(x,y){
    this.x = x; 
    this.y = y;
    this.size = 1;
  }
  move(){
    this.x += random(-2,2);
    this.yy += random(-2,2);

  }
  display(){
    strokeWeight(4);
    point(this.x, this.y);
  }
}
