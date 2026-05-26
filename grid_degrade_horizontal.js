function setup() {
  createCanvas(400, 400);
  background(220);
  
  for(let y=0; y<8; y++){
    for(let x = 0; x<8;x++){
      noStroke();
      fill(x*3, 0, y*25);
    square(x*50, y*50, 50);
    print(x,y, x*51, y*51); //va nous afficher les valeurs qu'on voit
  }
    }
}

function draw() {

}