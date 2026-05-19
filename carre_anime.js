let posX = 25;
let posY = 200;
let size = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  square(posX, posY, size);
  posX++;
}