let frequencySlider;
let frequency = 1; // Default frequency
let angle = 0;
let angleIncrement = 1;

function setup() {

  const Sketch1 = document.querySelector('.sketch1');
  // const Waveslider = document.querySelector('.waveslider');

  const canvas = createCanvas(400, 200);
  canvas.parent(Sketch1);
  
  
  // Create a slider for frequency
  frequencySlider = createSlider(0.1, 10, frequency, 0.1);
  // frequencySlider.position(20, 20);
  frequencySlider.style('width', '200px');
  // frequencySlider.parent(waveslider);
}

function draw() {
  background(100);
  
  // Get the value of the frequency slider
  frequency = frequencySlider.value();
  
  // Update the angle for oscillation
  angle += angleIncrement;
  
  // Draw the sine wave
  drawSineWave();
}

function drawSineWave() {
  colorMode(HSB, 360, 100, 100); // Use HSB color mode
  
  // Draw the sine wave with stroke color based on slider value
  beginShape();
  for (let x = 0; x < width; x++) {
    let angleOffset = map(x, 0, width, 0, TWO_PI * frequency);
    let y = height / 2 + sin(angle + angleOffset) * 50; // Amplitude of 50
    let hue = map(frequency, 0.1, 10, 0, 360); // Map slider value to hue value
    stroke(hue, 100, 100); // Set stroke color based on hue
    vertex(x, y);
  }
  endShape();
}
