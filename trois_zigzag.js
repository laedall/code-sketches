function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  zigzag(100, 150, 50, 75, 1);
  zigzag(50, 50, 300, 30, 3);
  zigzag(200, 200, 200, 200, 40);
}


function zigzag(x, y, l, h, e){
  //stroke (0);
  //rect(x,y,l,h);
  //stroke(255, 0, 0);
  
  // debut                                fin
  strokeWeight(e);
  line(x,     y,           x+l,           y);
  line(x,     y+h/2,       x+l,           y);
  line(x,     y+h/2,       x+l,       y+h/2);
  line(x,       y+h,       x+l,       y+h/2);
  line(x,     y+h,         x+l,         y+h);
}

