// planets adn moons    
// Ruchit Panchal 
// oCOTBER 17, 2023
// A look at recreating objects, objects In objects 

//Global Variable 

let myPlanet;



function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2 , height/2);

}

function draw() {
  background(220);
  myPlanet.display();
}


function mouseClicked(){

  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet (mouseX , mouseY);
  }
  else{
    myPlanet. createMoon();

  }
  

}

class Planet{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 100;
    this.radius = this.s/2;
    this.moons = []; // Fill with moon objects

  }
  display(){
    circle(this.x, this.y, this.s);
    for (let m of this.moons){
      m.update();
    }
  }
  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }
} 


class Moon{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.steps = 10;
    this. speed = -5;

  }
  update(){
    this.x += this.speed;
    this.steps --; 
    if(this.steps === 0 ){
      this.steps = 20;
      this.speed *= -1;
    
    }
    circle(this.x , this.y , 30);

  }



}