// Ping Pong Game (Capstone Project)
// Ruchit Panchal
// 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



//Global Variables

let player1Y ; let player2Y;
let player1Score = 0;
let player2Score = 0;

const paddleWidth = 10;
const paddleHeight = 60;
const paddleSpeed = 10;



let ball, ballSpeedX, ballSpeedY;



function setup() {
  createCanvas(windowWidth, windowHeight);
  player1Y = height /2 ;
  player2Y = height / 2;

  ball = createVector(width/2 , height/2 );
  //Random(two PI) generating a random angle within a full circle, 
  //which is used to set the initial direction for the ball movement
  let angle = random(TWO_PI); 
  ballSpeedX = 5* cos(angle);
  ballSpeedY = 5* sin(angle);



}

function draw() {
  background(220);
}



function drawPaddles(){
  fill(255);
  noStroke();
  rect(10 , player1Y - paddleHeight/2 , paddleWidth, paddleHeight);
}


function drawBall (){
  fill(255);
  noStroke();
  ellipse(ball.x , ball.y,15);

}
function drawScores(){
  fill(255);
  textSize(30);
  text(player1Score, width/4 , 50);
  text(player2Score, 3* width/4 , 50);

}

function moveplayer1(){
  if(keyIsDown(87)){ // W Key 
    player1Y -= paddleSpeed;
  }
  if(keyIsDown(83)){// D Key
    player1Y += paddleSpeed;
  }
  player1Y = constrain(player1Y, paddleHeight / 2, height - paddleHeight / 2);

}

function moveplayer2(){
  if(keyIsDown(UP_ARROW)){ // W Key 
    player2Y -= paddleSpeed;
  }
  if(keyIsDown(DOWN_ARROW)){// D Key
    player2Y += paddleSpeed;
  }
  player2Y = constrain(player2Y, paddleHeight / 2, height - paddleHeight / 2);

}

function moveBall(){
  ball.x += ballSpeedX;
  ball.y += ballSpeedY;
  
}


