let posX = 200;
let posY = 200;
let size = 20;
let vitX = 1.78;
let vitY = 1.24;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  posX+= vitX;
  posY += vitY
  
  if( posX >= 400-size|| posX <=0){
    vitX= vitX * -1;
  }
  
    if( posY >= 400-size|| posY <=0){
    vitY= vitY * -1;
  }
  
  square(posX, posY, size);

}