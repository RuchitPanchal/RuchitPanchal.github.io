// Ruchit Panchal 
// Cars! Cars! Cars!
// 8/11/2023



// instruction 
// i made an ellipse for the car and a rectangle for a truck .

// Arrays for the westbound and east bound
let eastbound = [];
let westbound = [];
// Setup function 
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create 20 eastbound vehicles
  for (let i = 0; i < 20; i++) {
    let type = int(random(2)); // 0 for car, 1 for truck
    let fillColor = color(random(255), random(255), random(255));
    let x = random(width / 2, width); // Start in the right half of the canvas
    let y = random(height / 2, height / 1.5); // Random Y value within the bpttom lane
    let direction = 1; // Moving right (eastbound)
    let xSpeed = random(2, 5); // Adjust speed range as needed

    eastbound.push(new Vehicle(type, fillColor, x, y, direction, xSpeed)); // Called the class 
  }

  // Create 20 westbound vehicles
  for (let i = 0; i < 20; i++) {
    let type = int(random(2)); // 0 for car, 1 for truck
    let fillColor = color(random(255), random(255), random(255));
    let x = random(0, width / 2); // Start in the left half of the canvas
    let y = random(height / 3.5, height / 2.5); // Random Y value within the top lane
    let direction = 0; // Moving left (westbound)
    let xSpeed = random(2, 5); // Adjust speed range as needed

    westbound.push(new Vehicle(type, fillColor, x, y, direction, xSpeed));
  }
}
// Draw fucntion 
function draw() {
  background(220);
  drawRoad(); // Call the drawRoad function

  // Update and display eastbound vehicles
  for (let vehicle of eastbound) {
    vehicle.action();
  }

  // Update and display westbound vehicles
  for (let vehicle of westbound) {
    vehicle.action();
  }
}
// This function draws the road 
function drawRoad() {
  fill(0);
  strokeWeight(5);
  rect(0, height / 4, width, height / 2);
  for (let x = 0; x < width; x += 200) {
    stroke(255);
    line(x, height / 2, x + width / 20, height / 2);
  }
}
// Mousepressed function to make the vehicles in the mouse postion, left click to make a car eastbound and Shift click to make the west bound vehicle
function mousePressed() {
  if (mouseButton === LEFT) {
    if (mouseY >= (height / 2 - height / 4) && mouseY <= (height / 2 + height / 4)) { // Condition so it does not make the vehicle spawn outside the road 
      if (keyIsDown(SHIFT)) {
        // Shift + left-click: Add a westbound car
        addWestboundCar(mouseX, mouseY);
      } else {
        // Left-click: Add an eastbound car
        addEastboundCar(mouseX, mouseY);
      }
    }

  }

}
// This is a function which adds eastbound car i used it in in the mouse pressed function to make the car 
function addEastboundCar(x, y) {
  let type = int(random(2)); // 0 for car, 1 for truck
  let fillColor = color(random(255), random(255), random(255));
  let direction = 1; // Moving right (eastbound)
  let xSpeed = random(2, 5);

  eastbound.push(new Vehicle(type, fillColor, x, y, direction, xSpeed));
}
// Similar as the add eastboundfunction
function addWestboundCar(x, y) {
  let type = int(random(2)); // 0 for car, 1 for truck
  let fillColor = color(random(255), random(255), random(255));
  let direction = 0; // Moving left (westbound)
  let xSpeed = random(2, 5);

  westbound.push(new Vehicle(type, fillColor, x, y, direction, xSpeed));
}
// this is my vehicle class
class Vehicle {
  constructor(type, fillColor, x, y, direction, xSpeed) { // constructor 
    this.type = type;
    this.fillColor = fillColor;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }
  // Display Function 
  display() {
    fill(this.fillColor);
    noStroke();
    // logic to make the car or truck 
    if (this.type === 0) {
      // Draw a car (ellipse)
      ellipse(this.x, this.y, 40, 20);
    } else if (this.type === 1) {
      // Draw a truck/van (rectangle)
      rect(this.x, this.y, 60, 30);
    }
  }
  // Move function 
  move() {
    if (this.direction === 0) {
      this.x -= this.xSpeed;
    } else {
      this.x += this.xSpeed;
    }

    // Wrap around to the opposite side
    if (this.x > width && this.direction === 1) {
      this.x = -60;
    } else if (this.x < -60 && this.direction === 0) {
      this.x = width;
    }
  }

  speedUp() {
    this.xSpeed = min(this.xSpeed + 1, 15);
  }

  speedDown() {
    this.xSpeed = max(this.xSpeed - 1, 0);
  }

  changeColor() {
    this.fillColor = color(random(255), random(255), random(255));
  }
  // action function 
  action() {
    this.move();
    this.display();

    // Call other functions based on a frequency
    if (frameCount % 120 === 0) { // Adjust frequency as needed
      if (random(1) < 0.2) {
        this.speedUp();
      }
      if (random(1) < 0.2) {
        this.speedDown();
      }
      if (random(1) < 0.2) {
        this.changeColor();
      }
    }
  }
}



