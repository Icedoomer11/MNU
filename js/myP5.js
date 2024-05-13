let sliderA;
let sliderB;
let sliderC;

let size = 360

function setup() {

  const colorboxDiv = document.querySelector('.colorbox');
  const sliderDiv = document.querySelector('.sliders');

  const canvas = createCanvas(size, size);
  canvas.parent(colorboxDiv);

  // Create a slider and place it at the top of the canvas.
  sliderA = createSlider(0, 255);
  sliderB = createSlider(0, 255);
  sliderC = createSlider(0, 255);

  sliderA.parent(sliderDiv);
  sliderB.parent(sliderDiv);
  sliderC.parent(sliderDiv);
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
  
  
  // background(r,g,b);
  rectMode(CENTER)
  noStroke();
  fill(r,g,b);
  rect(180,120,200,200);
  
  rectMode(CENTER)
  noStroke();
  fill(r,0,0);
  rect(180-30,300,30,40);
  
  rectMode(CENTER)
  noStroke();
  fill(0,g,0);
  rect(180,300,30,40);
  
  rectMode(CENTER)
  noStroke();
  fill(0,0,b);
  rect(180+30,300,30,40);
}