let posX = 200;
let posY = 200;
let size = 20;
let vitX = Math.random(2);
let vitY = Math.random(2);

function setup() {
  frameRate(60);
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  //background(220);
  stroke(123,12,234);
  fill(12,123,234);
  
  posX+= vitX;
  posY += vitY
  
  if( posX >= width-size|| posX <=0){
    vitX= vitX * -1;
  }
  
    if( posY >= height-size|| posY <=0){
    vitY= vitY * -1;
  }
  
  square(posX, posY, size);

}