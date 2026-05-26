function setup() {
  createCanvas(400, 400);
  background(255, 255, 140);
  
  for(let y=0; y<8; y++){
    for(let x = 0; x<8;x++){
      noStroke();
      fill(x*180, 230, y*50);
    circle(x*60, y*60, 30);
    print(x,y, x*51, y*51); //va nous afficher les valeurs qu'on voit
  }
    }
}

function draw() {

}