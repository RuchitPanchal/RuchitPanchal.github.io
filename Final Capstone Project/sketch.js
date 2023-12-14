// Capstone Project: Chess Game
// Ruchit Panchal
// 12 December 2023  
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variables 
let squareSize = 100;
let numRows = 8;
let numCols = 8;

function setup() {
  createCanvas(windowWidth, windowHeight);

}



function draw() {
  background(220);
  drawChessBoard();
}


function drawChessBoard() {
  // Nested  Loop 
  for (let i = 0; i < numCols; i++) {
    for (let c = 0; c < numRows; c++) {
      if ((i + c )% 2 === 0) {
        fill(255);// WHite Squares 

      } else {
        fill(0); //Black Squares

      }


      rect(i * squareSize, c * squareSize, squareSize, squareSize);
    }


  }
}



