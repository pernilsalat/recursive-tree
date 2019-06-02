let angle;

function setup() {
  createCanvas(800, 600);
  angle = createSlider(0, Math.PI * 3 / 4, Math.PI / 4, 0.001);
}

function draw() {
  background(0);
  translate(width / 2, height);

  stroke(255);
  drawRecursiveTree(200);
}

function drawRecursiveTree(len) {
  if (len >= 5) {
    push();
    line(0, 0, 0, -len);
    translate(0, -len);
    push();
    rotate(angle.value());
    line(0, 0, 0, -len);
    drawRecursiveTree(len * 0.65);
    pop();
    push();
    rotate(-angle.value());
    line(0, 0, 0, -len);
    drawRecursiveTree(len * 0.65);
    pop();
    pop();
  }
}
