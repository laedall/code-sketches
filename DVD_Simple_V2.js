//bouncy objet
let bouncy = {
  size: 16,
  posX: 10,
  posY: 15,
  vitX: 1.2,
  vitY: 0.9,
  name: "Bouncy Thing",
  
  update: function(){
    this.posX = this.posX + this.vitX;
    this.posY += this.vitY;
    
    if(this.posX + this.size > width || this.posX < 0) {
      this.vitX = this.vitX * -1;
    }
    if(this.posY + this.size > height || this.posY < 0){
      this.vitY *= -1;
    }
    
    stroke (255,0,255);
    strokeWeight(2);
    square(this.posX, this.posY, this.size);
    noStroke();
    text(this.name, this.posX, this.posY -4);
  } // fin de update
  
}; // end bouncy object

let chaton = Object.create(bouncy);
chaton.name = "Fuzyy Kitten";
chaton.vitX = 1.5;


function setup() {
  createCanvas(400, 400);
  
}

function draw (){
  background (220);
  bouncy.update();
  chaton.update();
}

