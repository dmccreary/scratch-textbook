// Script Anatomy - Interactive Diagram
// CANVAS_HEIGHT: 450

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 350;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let defaultTextSize = 16;

// Script blocks data
const scriptBlocks = [
  { type: 'hat', label: 'when green flag clicked', color: '#FFD500', y: 50, desc: 'Starts the script when green flag is clicked' },
  { type: 'stack', label: 'move 10 steps', color: '#4C97FF', y: 110, desc: 'Moves sprite forward 10 steps' },
  { type: 'stack', label: 'turn 15 degrees', color: '#4C97FF', y: 165, desc: 'Turns sprite clockwise 15 degrees' },
  { type: 'stack', label: 'say Hello! for 2 secs', color: '#9966FF', y: 220, desc: 'Shows speech bubble for 2 seconds' },
  { type: 'stack', label: 'wait 1 secs', color: '#FF9900', y: 275, desc: 'Pauses script for 1 second' }
];

// State
let hoveredBlock = -1;
let showLabels = true;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive diagram showing the anatomy of a Scratch script. Each block type has a specific shape and purpose. Hover blocks to see description.', LABEL);

  createControls();
}

function createControls() {
  showLabelsCheckbox = createCheckbox('Show Descriptions', true);
  showLabelsCheckbox.position(margin, drawHeight + 10);
  showLabelsCheckbox.changed(() => showLabels = showLabelsCheckbox.checked());
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
  text('Script Anatomy', canvasWidth / 2, 15);

  // Subtitle
  textSize(11);
  fill('#666');
  text('Blocks run in order from top to bottom. Each shape has a purpose.', canvasWidth / 2, 40);

  // Draw script blocks
  const blockX = canvasWidth / 2 - 100;
  let blockY = 60;
  const blockW = 200;
  const blockH = 35;
  const gap = 12;

  // Draw connection line (spine)
  stroke('#ddd');
  strokeWeight(3);
  line(canvasWidth/2, 60, canvasWidth/2, 60 + 5*(blockH+gap));
  noStroke();

  for (let i = 0; i < scriptBlocks.length; i++) {
    const block = scriptBlocks[i];
    const isHovered = hoveredBlock === i;
    
    const x = blockX;
    const y = blockY + i * (blockH + gap);
    
    drawBlock(block, x, y, isHovered);
  }

  // Control labels
  drawControlLabels();
}

function drawBlock(block, x, y, isHovered) {
  const w = 200;
  const h = 35;
  const r = 5;

  // Main block background
  fill(block.color);
  stroke(isHovered ? '#ff9800' : '#aaa');
  strokeWeight(isHovered ? 2 : 1);

  if (block.type === 'hat') {
    // Hat block - rounded top
    beginShape();
    vertex(x, y + 5);
    quadraticVertex(x, y - 5, x + w/2, y - 5);
    quadraticVertex(x + w, y - 5, x + w, y + 5);
    vertex(x + w, y + h);
    vertex(x, y + h);
    endShape(CLOSE);
  } else if (block.type === 'stack') {
    // Stack block - puzzle piece
    beginShape();
    // Top
    vertex(x, y + 5);
    vertex(x, y - 5);
    vertex(x + 20, y - 5);
    vertex(x + 20, y + 5);
    vertex(x + 50, y + 5);
    vertex(x + 50, y - 5);
    vertex(x + 80, y - 5);
    vertex(x + 80, y + 5);
    vertex(x + 110, y + 5);
    vertex(x + 110, y - 5);
    vertex(x + w - 20, y - 5);
    vertex(x + w - 20, y + 5);
    vertex(x + w, y + 5);
    // Bottom
    vertex(x + w, y + h);
    vertex(x + w - 20, y + h);
    vertex(x + w - 20, y + h + 5);
    vertex(x + 80, y + h + 5);
    vertex(x + 80, y + h);
    vertex(x + 50, y + h);
    vertex(x + 50, y + h + 5);
    vertex(x + 20, y + h + 5);
    vertex(x + 20, y + h);
    endShape(CLOSE);
  }
  noStroke();

  // Block label
  fill('white');
  noStroke();
  textSize(13);
  textAlign(LEFT, CENTER);
  text(block.label, x + 15, y + h/2);

  // Hover highlight
  if (block.id === hoveredBlock) {
    noFill();
    stroke('#ff9800');
    strokeWeight(3);
    // Redraw outline
    if (block.type === 'hat') {
      beginShape();
      vertex(x, y + 5);
      quadraticVertex(x, y - 5, x + 200/2, y - 5);
      quadraticVertex(x + 200, y - 5, x + 200, y + 5);
      vertex(x + 200, y + 35);
      vertex(x, y + 35);
      endShape(CLOSE);
    } else {
      // Stack outline
    }
  }
}

function drawControlLabels() {
  fill('#666');
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  text('Hover a block to see its description. Blocks snap together like puzzle pieces.', margin, drawHeight + 10);
  text('Hat blocks start scripts. Stack blocks do actions. Reporters give values. Booleans answer true/false.', margin, drawHeight + 25);
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

function mouseMoved() {
  // Simple hover detection
  const blockX = canvasWidth / 2 - 100;
  const blockY = 60;
  const blockH = 35;
  const gap = 12;
  
  let found = false;
  for (let i = 0; i < 5; i++) {
    const y = blockY + i * (35 + 12);
    if (mouseY >= y && mouseY <= y + 35) {
      hoveredBlock = i;
      found = true;
      break;
    }
  }
  if (!found) hoveredBlock = -1;
}