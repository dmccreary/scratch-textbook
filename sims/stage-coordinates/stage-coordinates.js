// Stage Coordinate System - Interactive Microsim
// CANVAS_HEIGHT: 500

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

// Sprite state
let spriteX = 0;
let spriteY = 0;
let spriteSize = 30;
let showGrid = true;
let showLabels = true;
let showQuadrants = true;

// Sprite costume (simple cat-like shape)
let spriteColor = '#ff6b35';

// State
let targetX = 0;
let targetY = 0;
let isDragging = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive coordinate system explorer. Click anywhere on the stage to move the sprite and see its coordinates. Toggle grid, labels, and quadrants.', LABEL);

  // Controls
  createControls();
  
  // Mouse events for dragging
  canvas.mouseOver(() => mouseOverCanvas = true);
  canvas.mouseOut(() => mouseOverCanvas = false);
}

let mouseOverCanvas = false;

function createControls() {
  // Show Grid checkbox
  showGridCheckbox = createCheckbox('Show Grid', true);
  showGridCheckbox.position(margin, drawHeight + 10);
  showGridCheckbox.changed(() => showGrid = showGridCheckbox.checked());

  // Show Labels checkbox
  showLabelsCheckbox = createCheckbox('Show Axis Labels', true);
  showLabelsCheckbox.position(margin + 150, drawHeight + 10);
  showLabelsCheckbox.changed(() => showLabels = showLabelsCheckbox.checked());

  // Show Quadrants checkbox
  showQuadrantsCheckbox = createCheckbox('Show Quadrants', true);
  showQuadrantsCheckbox.position(margin + 300, drawHeight + 10);
  showQuadrantsCheckbox.changed(() => showQuadrants = showQuadrantsCheckbox.checked());

  // Go to Center button
  centerButton = createButton('Go to Center (0,0)');
  centerButton.position(margin, drawHeight + 45);
  centerButton.mousePressed(() => {
    targetX = 0;
    targetY = 0;
  });

  // Go to Corner buttons
  cornerTL = createButton('Top-Left (-240,180)');
  cornerTL.position(margin + 150, drawHeight + 45);
  cornerTL.mousePressed(() => { targetX = -240; targetY = 180; });

  cornerTR = createButton('Top-Right (240,180)');
  cornerTR.position(margin + 270, drawHeight + 45);
  cornerTR.mousePressed(() => { targetX = 240; targetY = 180; });

  cornerBL = createButton('Bottom-Left (-240,-180)');
  cornerBL.position(margin, drawHeight + 75);
  cornerBL.mousePressed(() => { targetX = -240; targetY = -180; });

  cornerBR = createButton('Bottom-Right (240,-180)');
  cornerBR.position(margin + 200, drawHeight + 75);
  cornerBR.mousePressed(() => { targetX = 240; targetY = -180; });
}

function draw() {
  updateCanvasSize();

  // Smooth movement toward target
  spriteX = lerp(spriteX, targetX, 0.1);
  spriteY = lerp(spriteY, targetY, 0.1);

  // Drawing area background
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  noStroke();

  // Control area background
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Draw stage coordinate system
  drawStage();

  // Draw sprite
  drawSprite();

  // Draw coordinate display
  drawCoordinateDisplay();

  // Control area labels
  drawControlLabels();
}

function drawStage() {
  const stageWidth = 360;
  const stageHeight = 270;
  const stageX = (canvasWidth - stageWidth) / 2;
  const stageY = 30;

  // Stage background
  fill('#f5f5f5');
  stroke('#ddd');
  strokeWeight(2);
  rect(stageX, stageY, stageWidth, stageHeight, 4);

  // Draw grid
  if (showGrid) {
    drawGrid(stageX, stageY, stageWidth, stageHeight);
  }

  // Draw axes
  drawAxes(stageX, stageY, stageWidth, stageHeight);

  // Draw quadrant labels
  if (showQuadrants) {
    drawQuadrantLabels(stageX, stageY, stageWidth, stageHeight);
  }

  // Stage border
  noFill();
  stroke('#888');
  strokeWeight(2);
  rect(stageX, stageY, stageWidth, stageHeight, 4);
}

function drawGrid(stageX, stageY, stageWidth, stageHeight) {
  stroke('#ddd');
  strokeWeight(1);
  
  // Vertical grid lines (every 60 pixels = 30 Scratch units)
  for (let x = -240; x <= 240; x += 30) {
    const px = map(x, -240, 240, 0, 360) + stageX;
    if (x === 0) {
      stroke('#aaa');
      strokeWeight(2);
    } else {
      stroke('#ddd');
      strokeWeight(1);
    }
    line(px, stageY, px, stageY + 270);
  }
  
  // Horizontal grid lines (every 60 pixels = 30 Scratch units)
  for (let y = -180; y <= 180; y += 30) {
    const py = map(y, 180, -180, 0, 270) + stageY; // Note: y inverted
    if (y === 0) {
      stroke('#aaa');
      strokeWeight(2);
    } else {
      stroke('#ddd');
      strokeWeight(1);
    }
    line(stageX, py, stageX + 360, py);
  }
}

function drawAxes(stageX, stageY, stageWidth, stageHeight) {
  // X axis
  stroke('#666');
  strokeWeight(2);
  const axisY = stageY + map(0, 180, -180, 0, 270);
  line(stageX, axisY, stageX + 360, axisY);
  
  // Y axis
  const axisX = stageX + map(0, -240, 240, 0, 360);
  line(axisX, stageY, axisX, stageY + 270);

  // Arrowheads
  drawArrowhead(stageX + 360, axisY, 0); // right
  drawArrowhead(axisX, stageY, -PI/2); // up
}

function drawArrowhead(x, y, angle) {
  push();
  translate(x, y);
  rotate(angle);
  fill('#666');
  noStroke();
  triangle(0, 0, -8, -4, -8, 4);
  pop();
}

function drawQuadrantLabels(stageX, stageY, stageWidth, stageHeight) {
  fill('#888');
  noStroke();
  textSize(12);
  textAlign(CENTER, CENTER);
  
  text('QII (-,+)', stageX + 60, stageY + 60);
  text('QI (+,+)', stageX + 300, stageY + 60);
  text('QIII (-,-)', stageX + 60, stageY + 210);
  text('QIV (+,-)', stageX + 300, stageY + 210);
}

function drawSprite() {
  const stageX = (canvasWidth - 360) / 2;
  const stageY = 30;
  
  // Map Scratch coordinates to canvas
  const px = stageX + map(spriteX, -240, 240, 0, 360);
  const py = stageY + map(spriteY, 180, -180, 0, 270);
  
  // Draw simple cat-like sprite
  push();
  translate(px, py);
  
  // Body
  fill(spriteColor);
  noStroke();
  ellipse(0, 0, 28, 24);
  
  // Ears
  triangle(-10, -12, -6, -20, -2, -12);
  triangle(2, -12, 10, -20, 6, -12);
  
  // Eyes
  fill('white');
  ellipse(-6, -2, 8, 8);
  ellipse(6, -2, 8, 8);
  fill('black');
  ellipse(-6, -2, 4, 4);
  ellipse(6, -2, 4, 4);
  
  // Whiskers
  stroke('white');
  strokeWeight(1);
  line(-14, -2, -20, -5);
  line(-14, 0, -20, 0);
  line(-14, 2, -20, 5);
  line(14, -2, 20, -5);
  line(14, 0, 20, 0);
  line(14, 2, 20, 5);
  noStroke();
  
  pop();
}

function drawCoordinateDisplay() {
  // Live coordinate display
  fill('black');
  noStroke();
  textSize(16);
  textAlign(LEFT, TOP);
  text('x: ' + nf(spriteX, 1, 1), 20, drawHeight - 55);
  text('y: ' + nf(spriteY, 1, 1), 20, drawHeight - 35);
  
  // Quadrant indicator
  let quadrant = '';
  if (spriteX > 0 && spriteY > 0) quadrant = 'QI (+,+)';
  else if (spriteX < 0 && spriteY > 0) quadrant = 'QII (-,+)';
  else if (spriteX < 0 && spriteY < 0) quadrant = 'QIII (-,-)';
  else if (spriteX > 0 && spriteY < 0) quadrant = 'QIV (+,-)';
  else if (spriteX === 0 && spriteY === 0) quadrant = 'Center (0,0)';
  else if (spriteX === 0) quadrant = 'On Y-axis';
  else quadrant = 'On X-axis';
  
  fill('#FF9800');
  textSize(14);
  text('Quadrant: ' + quadrant, 20, drawHeight - 15);
}

function drawControlLabels() {
  fill('#666');
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  text('Click anywhere on stage to move sprite. Use buttons to jump to corners.', margin, drawHeight + 5);
  text('X: -240 (left) to 240 (right)  |  Y: 180 (top) to -180 (bottom)', margin, drawHeight + 20);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
    if (typeof showGridCheckbox !== 'undefined') {
      showGridCheckbox.position(margin, drawHeight + 10);
      showLabelsCheckbox.position(margin + 150, drawHeight + 10);
      showQuadrantsCheckbox.position(margin + 300, drawHeight + 10);
      centerButton.position(margin, drawHeight + 45);
      cornerTL.position(margin + 150, drawHeight + 45);
      cornerTR.position(margin + 270, drawHeight + 45);
      cornerBL.position(margin, drawHeight + 75);
      cornerBR.position(margin + 200, drawHeight + 75);
    }
  }
}

// Mouse events for clicking on stage
function mousePressed() {
  const stageX = (canvasWidth - 360) / 2;
  const stageY = 30;
  const stageW = 360;
  const stageH = 270;
  
  // Check if click is within stage area
  if (mouseX >= (canvasWidth - 360) / 2 && mouseX <= (canvasWidth + 360) / 2 &&
      mouseY >= 30 && mouseY <= 30 + 270) {
    // Map click position to Scratch coordinates
    targetX = map(mouseX, (canvasWidth - 360) / 2, (canvasWidth + 360) / 2, -240, 240);
    targetY = map(mouseY, 30, 30 + 270, 180, -180);
  }
}

function mouseMoved() {
  // Optional: could add hover preview
}