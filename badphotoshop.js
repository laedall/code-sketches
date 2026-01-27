var size = 33
var ancienX;
var ancienY;

function setup() {
  createCanvas(windowWidth,windowHeight, 400);
  background(255,204,0);
  ancienX = windowWidth/2;
  ancienY=windowHeight/2;
  randomColor()
}

function draw() {
  ancienX=ancienX+((mouseX-ancienX)/50);
  ancienY=ancienY+((mouseY-ancienY)/10);
  //background(220);
  circle(ancienX,ancienY,size);
  
  
}

function mouseClicked(){
  randomColor();
  
}

function keyPressed(){
  if(key==="s"){
    save("dessin.png");
  }
  if(key==="x"){
     background(255)
     }

}

function randomColor(){
  var R = random (255);
  var G = random (255);
  var B = random (255);
  fill(R,G,B);
  background (R,G,B);
  size = random (25,250);
  
}