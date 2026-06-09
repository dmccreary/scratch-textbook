// Block Shapes - Interactive Diagram
// CANVAS_HEIGHT: 500

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

// Block shapes data
const shapes = [
  {
    id: 'hat',
    name: 'Hat Block',
    desc: 'Starts a script when an event happens',
    shape: 'hat',
    examples: ['when green flag clicked', 'when this sprite clicked', 'when I receive message'],
    color: '#FFD500',
    x: 60, y: 80
  },
  {
    id: 'stack',
    name: 'Stack Block',
    desc: 'Does an action, then passes to next block',
    shape: 'stack',
    examples: ['move 10 steps', 'say Hello!', 'play sound pop'],
    color: '#4C97FF',
    x: 180, y: 80
  },
  {
    id: 'reporter',
    name: 'Reporter Block',
    desc: 'Gives a value (number or text) to other blocks',
    shape: 'reporter',
    examples: ['x position', 'pick random 1 to 10', 'timer'],
    color: '#00CC00',
    x: 60, y: 220
  },
  {
    id: 'boolean',
    name: 'Boolean Block',
    desc: 'Answers true/false - fits in hexagonal holes',
    shape: 'boolean',
    examples: ['touching mouse?', '5 > 3', 'key space pressed?'],
    color: '#FF9900',
    x: 180, y: 220
  },
  {
    id: 'cap',
    name: 'Cap Block',
    desc: 'Ends a script - nothing goes below it',
    shape: 'cap',
    examples: ['stop all', 'stop this script'],
    color: '#FF9900',
    x: 120, y: 340
  }
];

// State
let hoveredShape = null;
let clickedShape = null;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive diagram of the 5 Scratch block shapes: Hat, Stack, Reporter, Boolean, and Cap. Hover to see details, click to learn more.', LABEL);

  createControls();
}

function createControls() {
  resetButton = createButton('Reset');
  resetButton.position(margin, drawHeight + 10);
  resetButton.mousePressed(() => { clickedShape = null; });
}

function draw() {
  updateCanvasSize();

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  noStroke();

  // Control area
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill('black');
  noStroke();
  textSize(20);
  textAlign(CENTER, TOP);
  text('Scratch Block Shapes', canvasWidth / 2, 15);

  // Subtitle
  textSize(11);
  fill('#666');
  text('Each shape has a specific job. Blocks only fit where their shape allows.', canvasWidth / 2, 40);

  // Draw each shape
  for (let shape of shapes) {
    drawShape(shape);
  }

  // Control labels
  drawControlLabels();
}

function drawShape(shape) {
  const isHovered = hoveredShape === shape.id;
  const isClicked = clickedShape === shape.id;
  const x = shape.x;
  const y = shape.y;
  const w = 120;
  const h = 120;

  // Card background
  fill(isClicked ? '#fff8e1' : (isHovered ? '#fffde7' : 'white'));
  stroke(isClicked ? '#ff9800' : (isHovered ? '#ff9800' : '#ddd'));
  strokeWeight(isClicked ? 3 : (isHovered ? 2 : 1));
  rect(shape.x, shape.y, w, h, 8);
  noStroke();

  // Draw shape illustration
  drawShapeIllustration(shape);

  // Shape name
  fill('black');
  noStroke();
  textSize(14);
  textAlign(CENTER, TOP);
  text(shape.name, shape.x + w/2, shape.y + 5);

  // Description
  fill('#666');
  textSize(11);
  textAlign(LEFT, TOP);
  const descLines = wrapText(shape.desc, 110);
  let dy = shape.y + 25;
  for (let line of descLines) {
    text(line, shape.x + 5, dy);
    dy += 14;
  }

  // Examples (when clicked/hovered)
  if (isHovered || isClicked) {
    fill('#666');
    textSize(10);
    textAlign(LEFT, TOP);
    let exY = shape.y + 70;
    text('Examples:', shape.x + 5, exY);
    exY += 14;
    for (let ex of shape.examples) {
      text('• ' + ex, shape.x + 5, exY);
      exY += 12;
    }
  }

  // Click indicator
  if (isClicked) {
    noFill();
    stroke('#ff9800');
    strokeWeight(3);
    rect(shape.x, shape.y, w, h, 8);
  }
}

function drawShapeIllustration(shape) {
  const cx = shape.x + 60;
  const cy = shape.y + shape.h - 30;
  const scale = 0.7;

  stroke(shape.color);
  strokeWeight(2);
  fill('white');

  if (shape.shape === 'hat') {
    // Hat block - rounded top, flat bottom
    beginShape();
    vertex(cx - 40, cy - 5);
    quadraticVertex(cx - 40, cy - 35, cx, cy - 35);
    quadraticVertex(cx + 40, cy - 35, cx + 40, cy - 5);
    vertex(cx + 40, cy + 10);
    vertex(cx - 40, cy + 10);
    endShape(CLOSE);
  } else if (shape.shape === 'stack') {
    // Stack block - puzzle piece top and bottom
    beginShape();
    vertex(cx - 40, cy - 5);
    // Top notch
    vertex(cx - 40, cy - 10);
    vertex(cx - 30, cy - 10);
    vertex(cx - 30, cy - 5);
    vertex(cx - 15, cy - 5);
    vertex(cx - 15, cy - 15);
    vertex(cx - 5, cy - 15);
    vertex(cx - 5, cy - 5);
    vertex(cx + 5, cy - 5);
    vertex(cx + 5, cy - 15);
    vertex(cx + 15, cy - 15);
    vertex(cx + 15, cy - 5);
    vertex(cx + 30, cy - 5);
    vertex(cx + 30, cy - 10);
    vertex(cx + 40, cy - 10);
    vertex(cx + 40, cy - 5);
    // Bottom
    vertex(cx + 40, cy + 10);
    vertex(cx + 30, cy + 10);
    vertex(cx + 30, cy + 15);
    vertex(cx + 5, cy + 15);
    vertex(cx + 5, cy + 10);
    vertex(cx - 5, cy + 10);
    vertex(cx - 5, cy + 15);
    vertex(cx - 15, cy + 15);
    vertex(cx - 15, cy + 10);
    vertex(cx - 30, cy + 10);
    vertex(cx - 30, cy + 5);
    vertex(cx - 40, cy + 5);
    endShape(CLOSE);
  } else if (shape.shape === 'reporter') {
    // Reporter - rounded rectangle
    rect(cx - 50, cy - 20, 100, 40, 20);
  } else if (shape.shape === 'boolean') {
    // Boolean - hexagon
    beginShape();
    for (let i = 0; i < 6; i++) {
      const angle = i * PI / 3 - PI / 6;
      vertex(cx + 30 * cos(angle), cy + 30 * sin(angle));
    }
    endShape(CLOSE);
  } else if (shape.shape === 'cap') {
    // Cap block - flat top, rounded bottom
    beginShape();
    vertex(cx - 40, cy - 10);
    vertex(cx + 40, cy - 10);
    vertex(cx + 40, cy + 5);
    quadraticVertex(cx + 40, cy + 25, cx, cy + 25);
    quadraticVertex(cx - 40, cy + 25, cx - 40, cy + 5);
    vertex(cx - 40, cy - 10);
    endShape(CLOSE);
  }
}

function wrapText(text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (let word of words) {
    const testLine = currentLine + word + ' ';
    if (textWidth(testLine) > maxWidth) {
      lines.push(currentLine);
      currentLine = word + ' ';
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

function drawControlLabels() {
  fill('#666');
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  text('Hover for details. Click to expand and see examples. Each shape = specific job!', margin, drawHeight + 10);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}