let ramps = [];
let currentRampIndex = 0;
let textureColor;

function preload() {
  ramps.push(loadModel('obj/ramp1.obj'));
  ramps.push(loadModel('obj/ramp2.obj'));
}

function setup() {
  const Sketch1 = document.querySelector('.sketch1'); // Get the container element

  const canvas = createCanvas(500, 500, WEBGL); // Create WebGL canvas
  canvas.parent(Sketch1); // Set the parent of the canvas to the container element

  // Define the texture color
  textureColor = color(188, 106, 60); // Red color (change as needed)

  camera(200, -100, 100);

  // Create a button
  const button = createButton('Cycle Ramp');
  button.mousePressed(cycleRamp);
}

function draw() {
  background(245,245,245);
  lights();

  // Draw the current ramp
  const currentRamp = ramps[currentRampIndex];
  if (currentRamp) {
    fill(textureColor); // Set the fill color
    noStroke(); // Disable stroke 

    rotateX(PI);
    rotateY(frameCount * 0.005);
    scale(20); // Adjust the scale to fit the ramp properly
    model(currentRamp);
  }
}

function cycleRamp() {
  // Increment the current ramp index
  currentRampIndex++;
  // Wrap around to the beginning if we reach the end
  if (currentRampIndex >= ramps.length) {
    currentRampIndex = 0;
  }
}
