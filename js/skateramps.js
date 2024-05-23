let ramps = [];
let currentRampIndex = 0;
let textureColor;

function preload() {
  ramps.push(loadModel('obj/ramp1.obj'));
  ramps.push(loadModel('obj/ramp2.obj'));
  ramps.push(loadModel('obj/ramp3.obj'));
  ramps.push(loadModel('obj/ramp4.obj'));
  ramps.push(loadModel('obj/ramp5.obj'));
  ramps.push(loadModel('obj/ramp6.obj'));
  ramps.push(loadModel('obj/ramp7.obj'));
  // Add more ramps if needed
}

function setup() {
  const Sketch1 = document.querySelector('.sketch1'); // Get the container element

  const canvas = createCanvas(1000, 600, WEBGL); // Create WebGL canvas
  canvas.parent(Sketch1); // Set the parent of the canvas to the container element

  // Define the texture color
  textureColor = color('#808080'); // Red color (change as needed)

  camera(200, -100, 100);

  // Create buttons
  const prevButton = createButton('Prev Ramp');
  prevButton.mousePressed(prevRamp);
  
  const nextButton = createButton('Next Ramp');
  nextButton.mousePressed(nextRamp);
}

function draw() {
  background(245,245,245);
  lights();

  let c = color(100, 100, 100);
  directionalLight(c, 0, 1, 0);

  // Draw the current ramp
  const currentRamp = ramps[currentRampIndex];
  if (currentRamp) {
    fill(textureColor); // Set the fill color
    noStroke(); // Disable stroke 

    orbitControl();
    scale(20); // Adjust the scale to fit the ramp properly
    model(currentRamp);
  }
}

function nextRamp() {
  currentRampIndex++;
  if (currentRampIndex >= ramps.length) {
    currentRampIndex = 0;
  }
}

function prevRamp() {
  currentRampIndex--;
  if (currentRampIndex < 0) {
    currentRampIndex = ramps.length - 1;
  }
}
