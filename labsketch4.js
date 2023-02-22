function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(220);
  
  makeSprite(200, 250, 2);
}

function makeSprite(x, y, siz){
  translate(x, y);
  scale(siz);
  if (mouseIsPressed){
  tri(0, -50, 5, "rgb(250, 200, 0)")
  cir(0, 5, 10, "rgb(170, 160, 120)");
  halfCir(25, -50, 45, 10, "rgb(170, 160, 110)")
  halfCir(-25, -50, 135, 10, "rgb(170, 160, 110)")
  }
  else {tri(0, -50, 5, "rgb(250, 200, 0)")
  cir(0, 0, 10, "rgb(170, 160, 120)");
  halfCir(0, -50, 0, 10, "rgb(170, 160, 110)")
  halfCir(0, -50, 180, 10, "rgb(170, 160, 110)")
  }
}

function cir(x, y, siz, col) {
  push();
  translate(x, y);
  scale(siz);
  noStroke();
  fill(col);
  ellipse(0, 0, 5)
  pop();
}

function tri(x, y, siz, col) {
  push();
  translate(x, y);
  scale(siz);
  noStroke();
  fill(col);
  triangle(0, -5, 5, 5, -5, 5);
  pop();
}

function halfCir(x, y, rot, siz, col){
  push();
  translate(x, y)
  scale(siz);
  noStroke();
  fill(col);
  rotate(rot);
  arc(0, 0, 10, 10, 270, 90);
  pop();
}
