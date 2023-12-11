// vectors basics 
// RUchit panChal 
// Nov 1  , 2023 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Global Variable  
let movers =[];




function setup() {
  createCanvas(windowWidth, windowHeight);
}


function mousePressed(){
  movers. push(new Mover(mouseX , mouseY ));

}


function draw() {
  background(220);
  for(let m of movers ){
    m.move();
    m.display();
  }

}

class Mover{

  constructor ( x , y){
    this.position = createVector(x,y); let s = 20;

    
  }
  move(){

  }

  display(){
    translate(this.position.x , this.position.y);
    circle(0,0 , this.s);
    pop();


    
  }
}