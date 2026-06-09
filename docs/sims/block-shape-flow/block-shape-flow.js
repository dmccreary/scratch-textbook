// Block Shape Flow - Interactive Diagram
// CANVAS_HEIGHT: 470

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let defaultTextSize = 16;

// Flow steps
const flowSteps = [
  { id: 1, label: 'Hat Block', desc: 'Starts script when event occurs', color: '#FFD500', shape: 'hat', x: 150, y: 65, w: 120, h: 40 },
  { id: 2, label: 'Stack Block 1', desc: 'First action (e.g., move)', color: '#4C97FF', shape: 'stack', x: 150, y: 125, w: 120, h: 35 },
  { id: 3, label: 'Stack Block 2', desc: 'Second action (e.g., turn)', color: '#4C97FF', shape: 'stack', x: 150, y: 175, w: 120, h: 35 },
  { id: 4, label: 'Stack Block 3', desc: 'Third action (e.g., wait)', color: '#FF9900', shape: 'stack', x: 150, y: 225, w: 120, h: 35 },
  { id: 5, label: 'Reporter', desc: 'Value for parameter', color: '#00CC00', shape: 'reporter', x: 290, y: 175, w: 70, h: 30 },
  { id: 6, label: 'Boolean', desc: 'True/False condition', color: '#FF9900', shape: 'boolean', x: 290, y: 225, w: 70, h: 30 },
  { id: 7, label: 'Cap Block', desc: 'Ends the script', color: '#FF9900', shape: 'cap', x: 150, y: 275, w: 120, h: 40 }
];

// Connections between steps
const connections = [
  { from: 1, to: 2, label: 'then' },
  { from: 2, to: 3, label: 'then' },
  { from: 3, to: 4, label: 'then' },
  { from: 5, to: 3, label: 'input' }, // reporter to stack
  { from: 6, to: 4, label: 'condition' } // boolean to stack
];

// State
let hoveredStep = -1;
let showTypes = true;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive flow diagram showing how Scratch blocks connect: Hat → Stack → Stack → Stack, with Reporter and Boolean blocks fitting into slots.');

  createControls();
}

function createControls() {
  showTypesCheckbox = createCheckbox('Show Block Types', true);
  showTypesCheckbox.changed(() => showTypes = showTypesCheckbox.checked());

  resetButton = createButton('Reset Highlight');
  resetButton.mousePressed(() => { hoveredStep = -1; });

  positionControls();
}

function positionControls() {
  // Row 1 of the control strip
  showTypesCheckbox.position(margin, drawHeight + 12);
  resetButton.position(margin + 190, drawHeight + 12);
}

function draw() {
  updateCanvasSize();

  // Background
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
  textSize(18);
  textAlign(CENTER, TOP);
  text('Block Shape Flow', canvasWidth / 2, 10);

  // Subtitle
  textSize(11);
  fill('#666');
  text('How blocks connect: Hat → Stacks → Cap. Reporters/Booleans fit in slots.', canvasWidth / 2, 32);

  // Draw connections first (behind blocks)
  drawConnections();

  // Draw each step
  for (let i = 0; i < flowSteps.length; i++) {
    drawStep(flowSteps[i]);
  }

  // Draw legend
  drawLegend();

  // Control labels
  drawControlLabels();
}

function drawConnections() {
  stroke('#ff9800');
  strokeWeight(2);
  noFill();

  for (let conn of connections) {
    const from = flowSteps[conn.from - 1];
    const to = flowSteps[conn.to - 1];
    
    // Calculate connection points
    const fx = from.x + from.w / 2;
    const fy = from.y + from.h;
    const tx = to.x + to.w / 2;
    const ty = to.y;

    // Draw line with arrow
    stroke('#ff9800');
    strokeWeight(2);
    line(fx, fy, tx, ty);

    // Arrowhead
    drawArrowhead(tx, ty, atan2(to.y - from.y - to.h, tx - fx));
    
    // Label
    fill('#ff9800');
    noStroke();
    textSize(9);
    textAlign(CENTER, CENTER);
    text(conn.label, (fx + tx) / 2, (fy + ty) / 2 - 8);
  }
}

function drawArrowhead(x, y, angle) {
  push();
  translate(x, y);
  rotate(angle);
  fill('#ff9800');
  noStroke();
  triangle(0, 0, -6, -3, -6, 3);
  pop();
}

function drawStep(step) {
  const isHovered = hoveredStep === step.id;
  const x = step.x;
  const y = step.y;
  const w = step.w;
  const h = step.h;

  // Block background
  fill(step.color);
  stroke(isHovered ? '#ff9800' : '#aaa');
  strokeWeight(isHovered ? 3 : 1);

  if (step.shape === 'hat') {
    // Hat block
    beginShape();
    vertex(x, y + 5);
    quadraticVertex(x, y - 5, x + w/2, y - 5);
    quadraticVertex(x + w, y - 5, x + w, y + 5);
    vertex(x + w, y + h);
    vertex(x, y + h);
    endShape(CLOSE);
  } else if (step.shape === 'stack') {
    // Stack block
    rect(x, y, w, h, 5);
  } else if (step.shape === 'reporter') {
    // Reporter - rounded rect
    rect(x, y, w, h, 10);
  } else if (step.shape === 'boolean') {
    // Boolean - hexagon
    drawHexagon(x + w/2, y + h/2, w/2);
  } else if (step.shape === 'cap') {
    // Cap block - flat top, rounded bottom
    beginShape();
    vertex(x, y);
    vertex(x + w, y);
    vertex(x + w, y + h - 10);
    quadraticVertex(x + w, y + h, x + w/2, y + h);
    quadraticVertex(x, y + h, x, y + h - 10);
    endShape(CLOSE);
  }
  noStroke();

  // Label
  fill('white');
  noStroke();
  textSize(12);
  textAlign(CENTER, CENTER);
  text(step.label, x + w/2, y + h/2);

  // Type label (if showTypes)
  if (showTypes) {
    fill('rgba(255,255,255,0.8)');
    textSize(8);
    text(step.shape.toUpperCase(), x + w/2, y - 8);
  }

  // Hover highlight
  if (isHovered) {
    noFill();
    stroke('#ff9800');
    strokeWeight(3);
    if (step.shape === 'hat' || step.shape === 'cap') {
      // redraw outline
    } else {
      rect(x, y, w, h, 5);
    }
  }
}

function drawHexagon(cx, cy, r) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    const angle = i * PI / 3 - PI / 6;
    vertex(cx + r * cos(angle), cy + r * sin(angle));
  }
  endShape(CLOSE);
}

function drawLegend() {
  const legendX = margin;
  const legendY = drawHeight - 85;
  const legendW = max(canvasWidth - 2 * margin, 480);

  fill('#f0f0f0');
  stroke('#ddd');
  strokeWeight(1);
  rect(legendX, legendY, legendW, 60, 5);

  fill('black');
  noStroke();
  textSize(11);
  textAlign(LEFT, TOP);
  text('Block Types:', legendX + 10, legendY + 5);

  const types = [
    { label: 'Hat: Starts script', color: '#FFD500' },
    { label: 'Stack: Does action', color: '#4C97FF' },
    { label: 'Reporter: Gives value', color: '#00CC00' },
    { label: 'Boolean: True/False', color: '#FF9900' },
    { label: 'Cap: Ends script', color: '#FF9900' }
  ];

  // Grid: 3 columns x 2 rows so items never overflow the box
  const colW = (legendW - 20) / 3;
  for (let i = 0; i < types.length; i++) {
    const t = types[i];
    const tx = legendX + 10 + (i % 3) * colW;
    const ty = legendY + 20 + floor(i / 3) * 19;
    fill(t.color);
    noStroke();
    rect(tx, ty, 14, 14, 3);
    fill('black');
    textSize(10);
    text(t.label, tx + 20, ty + 2);
  }
}

function drawControlLabels() {
  // Hint line at the bottom of the draw area
  fill('#666');
  noStroke();
  textSize(11);
  textAlign(LEFT, CENTER);
  text('Hover blocks for details. Flow: Hat → Stacks → Cap.', margin, drawHeight - 10);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}

function mouseMoved() {
  let found = false;
  for (let step of flowSteps) {
    if (mouseX >= step.x && mouseX <= step.x + step.w &&
        mouseY >= step.y && mouseY <= step.y + step.h) {
      hoveredStep = step.id;
      found = true;
      break;
    }
  }
  if (!found) hoveredStep = -1;
}