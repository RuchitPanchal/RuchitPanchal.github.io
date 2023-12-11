// Cars! Cars! Cars!
// Ruchit Panchal 
// Oct !7 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  drawRoadd();
  for (let vehicle of vehicles) {
    vehicle.display();
    vehicle.move();
  }
}

function drawRoadd() {
  fill(0);
  strokeWeight(5);
  rect(0, height / 4, width, height / 2);
  for (let x = 0; x < width; x += 200) {
    stroke(255);
    line(x, height / 2, x + width / 25, height / 2);
  }
}
class Vehicle {
  constructor(x, y, type, color, direction, xSpeed) {
    this.x = x;
    this.y = y;
    this.type = type; // 0 for Car, 1 for Truck/Van
    this.color = color; // Vehicle color
    this.direction = direction; // 0 for left, 1 for right
    this.xSpeed = xSpeed; // Horizontal speed per frame
  }

  move() {
    if (this.direction === 0) {
      this.x -= this.xSpeed;
      if (this.x < -60) {
        this.x = width;
      }
    } 
    else {
      this.x += this.xSpeed;
      if (this.x > width) {
        this.x = -60;
      }
    }
  }

  display() {
    fill(this.color);
    if (this.type === 0) {
      // Car shape (customize as needed)
      rect(this.x, this.y, 40, 20);
    } 
    else {
      // Truck/Van shape (customize as needed)
      rect(this.x, this.y, 60, 30);
    }
  }
}




