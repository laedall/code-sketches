function setup() {
  createCanvas(400, 400);
  background(220);
  
  for(let y=0; y<8; y++){
    for(let x = 0; x<8;x++){
      fill(x*51, 0, y*51);
    square(x*50, y*50, 40);
    print(x,y); //va nous afficher les valeurs qu'on voit
  }
    }
}

function draw() {

}