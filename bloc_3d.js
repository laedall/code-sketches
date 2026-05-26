function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

// Click and drag the mouse to view the scene from different angles.

function setup() {
  createCanvas(500, 500, WEBGL);
  fill(209,60,157)

  describe('A white box on a 112,60,209 background.');
}

function draw() {
  background(112,60,209);

  // Enable orbiting with the mouse.
  orbitControl();

  // Draw the box.
  box(209,60,157);
}