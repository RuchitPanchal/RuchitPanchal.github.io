let numShapes = 50;
let shapes = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < numShapes; i++) {
    shapes.push(new Shape(random(width), random(height)));
  }
}

function draw() {
  background(255);
  
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].display();
    shapes[i].move();
  }
}

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 50);
    this.color = color(random(255), random(255), random(255), 100);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
    }
  }
}
