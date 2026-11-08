function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(17, 17, 17, 40); // low alpha leaves a fading trail
  const d = dist(mouseX, mouseY, width / 2, height / 2);
  fill(map(mouseX, 0, width, 80, 255), 120, map(mouseY, 0, height, 255, 80), 180);
  circle(mouseX, mouseY, 20 + d * 0.1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}