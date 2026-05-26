function setup() {
  createCanvas(400, 400);
  background(255, 255, 0);
  
  for(let y=0; y<8; y++){
    for(let x = 0; x<8;x++){
      noStroke();
      fill(x*180, 230, y*255);
    circle(x*400, y*400, 400);
    print(x,y, x*51, y*51); //va nous afficher les valeurs qu'on voit
  }
    }
}

function draw() {

}