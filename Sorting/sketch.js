// selecting sirt
// ruchit Panchal 
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let values = [];
const arraySize = 20;


function setup() {
  noCanvas(); populateArray();
}



function populateArray(){
  //using a loop , fill our array with many random numbers 
  for(let i = 0; i < arraySize; i++){
    values.push(floor(random(1000))); 
  }
}
