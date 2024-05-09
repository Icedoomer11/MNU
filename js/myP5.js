let sliderA;
let sliderB;
let sliderC;

let size = 360

function setup() {
  createCanvas(size , size);

  // Create a slider and place it at the top of the canvas.
  sliderA = createSlider(0, 255);
  sliderB = createSlider(0, 255);
  sliderC = createSlider(0, 255);
  //sliderA.position(10, 10);
  sliderA.size(size/3);
  sliderB.size(size/3);
  sliderC.size(size/3);

  describe('A dark gray square with a range slider at the top. The square changes color when the slider is moved.');
}

function draw() {
  // Use the slider as a grayscale value.
  let r = sliderA.value();
  let g = sliderB.value();
  let b = sliderC.value();
  
  background(r,g,b);
}