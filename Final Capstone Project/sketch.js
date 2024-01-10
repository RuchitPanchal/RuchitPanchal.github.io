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
let board = [];



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
      if ((i + c) % 2 === 0) {
        fill(255);// WHite Squares 

      } else {
        fill(0); //Black Squares

      }


      rect(i * squareSize, c * squareSize, squareSize, squareSize);
    }


  }
}
function makepieces() {
  for (let i = 0; i < 8; i++) {
    for(let j = 0 ; j< 8; j++){
     let piece = board[i][j];
     if (piece !== null) {
      piece.show(i,j);
     }
    }

  }
}



function mouseClicked(){
  let x = Math.floor(mouseX , width/8);
  let y = Math.floor(mouseY , height /8);

  let selectedPiece = board[x][y];
  



}


class Piece {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;

    show(){
      textSize(30);
      fill(this.color === "white" ? 255 : 0);
      text("P", x * (width/8) + 0.35 * (width /8), y * (height/8) + 0.7 * (height/8));
    move(newX , newY){
      // Adding later 

    }
    class Rook extends Piece{
      constructor(x , y, color){
        super(x, y, color);
      }
      show(){
        textSize(30);
        fill(this.color === "white" ? 255: 0);
        text("R" , x *(width/8 )+ 0.35 *(width/8), y*(height/8) + 0.7 * (height/8) );
        move (newX, newY){
          // Later
        }

      }

      
        
      }

        
      

    }

    }

  }

