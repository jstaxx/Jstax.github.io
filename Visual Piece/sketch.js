// Define a custom variable
let circleSize = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('#C5B8F9');
  
  // Draw a circle
  fill(0, 0, 255);
  ellipse(mouseX, mouseY, circleSize, circleSize);
  
  // Display text
  fill(0);
  textAlign(CENTER);
  text('Click to change circle size', width/2, height-20);
}

function mousePressed() {
  // Change circle size on mouse click
  circleSize = random(20, 100);
}

