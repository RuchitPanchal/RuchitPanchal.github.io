// loca Storage + Sound Library
// RUhcit Panchal   
// 27 NoveMber 2023;

//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



// Global Variables 
let ball; 
let totalBounces = 0;




function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(width/2 , height/2);
}

function draw() {
  background(220);
  ball.display(Ball);
  ball.move();
}


class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-6,6), random(-6,6));

  }
  display(){
    circle(this.pos.x, this.pos.y , 30 );

  }
  move(){
    this.pos.add(this.vel);
    // check for Wall Collisons 
    if(this.pos.x<0 || this.pos.x>width){
      this.vel.x *= -1;
      totalBounces += 1;
    }
    if(this.pos.y<0 || this.pos.y>height ){
      this.vel.y *=-1;
      totalBounces *=1;
    }
  }

}

