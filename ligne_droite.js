function setup() {
  createCanvas(400, 400);
  background(220);
}

const unit = 50;
var x = 0;
var y = 0;
var blanc = true;


function draw() {
  
  noStroke();
  
  if(blanc==true){
    fill(255);
    blanc = false;
  }
    else if (blanc == false){
    fill(0);
    blanc = true;
  }
  
  

  square(x,y,unit);
  
  x += unit;
  
  if(x >= width){
    x = 0;
    y += unit;
  }
}