// Coordinate Reporters - Interactive Microsim
// CANVAS_HEIGHT: 450

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 350;
let controlHeight = 90;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

// State
let spriteX = 0;
let spriteY = 0;
let targetX = 0;
let targetY = 0;
let showReporters = true;
let followMouse = false;
let showPath = false;
let pathPoints = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive coordinate reporters. Move the sprite and see x position and y position reporters update in real time. Click to set target position.');

  createControls();

  canvas.mouseOver(() => mouseOverCanvas = true);
  canvas.mouseOut(() => mouseOverCanvas = false);
}

let mouseOverCanvas = false;
let lastMouseX = 0;
let lastMouseY = 0;

function createControls() {
  // Show reporters checkbox (row 1)
  showReportersCheckbox = createCheckbox('Show x/y Reporters', true);
  showReportersCheckbox.position(margin, drawHeight + 12);
  showReportersCheckbox.changed(() => showReporters = showReportersCheckbox.checked());

  // Follow mouse checkbox (row 1)
  followMouseCheckbox = createCheckbox('Follow Mouse', false);
  followMouseCheckbox.position(margin + 180, drawHeight + 12);
  followMouseCheckbox.changed(() => followMouse = followMouseCheckbox.checked());

  // Show path checkbox (row 1)
  showPathCheckbox = createCheckbox('Show Path', false);
  showPathCheckbox.position(margin + 310, drawHeight + 12);
  showPathCheckbox.changed(() => { showPath = showPathCheckbox.checked(); pathPoints = []; });

  // Go to center button (row 2)
  centerButton = createButton('Go to Center (0,0)');
  centerButton.position(margin, drawHeight + 50);
  centerButton.mousePressed(() => { targetX = 0; targetY = 0; });

  // Clear path button (row 2)
  clearPathButton = createButton('Clear Path');
  clearPathButton.position(margin + 200, drawHeight + 50);
  clearPathButton.mousePressed(() => { pathPoints = []; });
}

function draw() {
  updateCanvasSize();

  // Handle follow mouse (stage center is at canvasWidth/2, y = 170)
  if (followMouse && mouseOverCanvas) {
    targetX = (mouseX - canvasWidth / 2) / (360 / 480);
    targetY = (170 - mouseY) / (280 / 360);
    // Clamp to stage bounds
    targetX = constrain(targetX, -230, 230);
    targetY = constrain(targetY, -170, 170);
  }

  // Smooth movement
  spriteX = lerp(spriteX, targetX, 0.1);
  spriteY = lerp(spriteY, targetY, 0.1);

  // Track path
  if (showPath && frameCount % 3 === 0) {
    pathPoints.push({x: spriteX, y: spriteY});
    if (pathPoints.length > 200) pathPoints.shift();
  }

  // Drawing area
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Draw coordinate system
  drawCoordinateSystem();

  // Draw path
  if (showPath && pathPoints.length > 1) {
    drawPath();
  }

  // Draw sprite
  drawSprite();

  // Top info bar
  drawInfoBar();

  // Control labels
  drawControlLabels();
}

function drawCoordinateSystem() {
  // Stage area
  const stageX = (canvasWidth - 360) / 2;
  const stageY = 30;
  const stageW = 360;
  const stageH = 280;

  // Stage background
  fill('#f5f5f5');
  stroke('#ddd');
  strokeWeight(2);
  rect((canvasWidth - 360)/2, 30, 360, 280, 4);

  // Grid
  stroke('#eee');
  strokeWeight(1);
  for (let x = -240; x <= 240; x += 40) {
    const px = (canvasWidth/2) + x * (360/480);
    if (x === 0) { stroke('#aaa'); strokeWeight(2); } else { stroke('#ddd'); strokeWeight(1); }
    line(px, 30, px, 310);
  }
  for (let y = -180; y <= 180; y += 60) {
    const py = 170 - y * (280/360);
    if (y === 0) { stroke('#aaa'); strokeWeight(2); } else { stroke('#ddd'); strokeWeight(1); }
    line((canvasWidth-360)/2, py, (canvasWidth+360)/2, py);
  }

  // Axes (stage center is at y = 170)
  stroke('#666');
  strokeWeight(2);
  // X axis
  line((canvasWidth-360)/2, 170, (canvasWidth+360)/2, 170);
  // Y axis
  line(canvasWidth/2, 30, canvasWidth/2, 310);

  // Arrowheads
  drawArrowhead((canvasWidth+360)/2, 170, 0);
  drawArrowhead(canvasWidth/2, 30, -PI/2);

  // Axis labels
  fill('#666');
  noStroke();
  textSize(11);
  textAlign(CENTER, CENTER);
  // X axis labels
  text('-240', (canvasWidth/2) - 165, 185);
  text('0', canvasWidth/2 + 12, 185);
  text('240', (canvasWidth/2) + 165, 185);

  // Y axis labels
  text('180', canvasWidth/2 - 18, 40);
  text('-180', canvasWidth/2 - 20, 300);
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

function drawPath() {
  noFill();
  stroke('#4C97FF');
  strokeWeight(2);
  beginShape();
  for (let p of pathPoints) {
    vertex(canvasWidth/2 + p.x * (360/480), 170 - p.y * (280/360));
  }
  endShape();
}

function drawSprite() {
  // Map logical coords to canvas (stage center at canvasWidth/2, y = 170)
  const px = canvasWidth/2 + spriteX * (360/480);
  const py = 170 - spriteY * (280/360);

  push();
  translate(px, py);
  
  // Simple cat shape
  fill('#ff6b35');
  noStroke();
  ellipse(0, 0, 28, 24);
  triangle(-10, -12, -6, -20, -2, -12);
  triangle(2, -12, 10, -20, 6, -12);
  fill('white');
  ellipse(-6, -2, 8, 8);
  ellipse(6, -2, 8, 8);
  fill('black');
  ellipse(-6, -2, 4, 4);
  ellipse(6, -2, 4, 4);
  
  pop();
}

function drawInfoBar() {
  if (!showReporters) return;
  // Live coordinate display
  fill('black');
  noStroke();
  textSize(16);
  textAlign(LEFT, TOP);
  text('x: ' + nf(spriteX, 1, 1), 20, 5);
  text('y: ' + nf(spriteY, 1, 1), 20, 25);
  
  // Quadrant
  let quadrant = '';
  if (spriteX > 0 && spriteY > 0) quadrant = 'QI (+,+)';
  else if (spriteX < 0 && spriteY > 0) quadrant = 'QII (-,+)';
  else if (spriteX < 0 && spriteY < 0) quadrant = 'QIII (-,-)';
  else if (spriteX > 0 && spriteY < 0) quadrant = 'QIV (+,-)';
  else if (spriteX === 0 && spriteY === 0) quadrant = 'Center (0,0)';
  else if (spriteX === 0) quadrant = 'On Y-axis';
  else quadrant = 'On X-axis';
  
  fill('#FF9800');
  textSize(13);
  text('Quadrant: ' + quadrant, 20, 45);
}

function drawControlLabels() {
  // Hint rendered inside the draw area, near its bottom edge (stage ends at y = 310)
  fill('#666');
  noStroke();
  textSize(11);
  textAlign(CENTER, BOTTOM);
  text('Click on the stage to send the sprite to that position.', canvasWidth / 2, drawHeight - 10);
}

function mousePressed() {
  // Handle clicks on stage area
  if (mouseY >= 30 && mouseY <= 310 && mouseX >= (canvasWidth-360)/2 && mouseX <= (canvasWidth+360)/2) {
    targetX = map(mouseX, (canvasWidth-360)/2, (canvasWidth+360)/2, -240, 240);
    targetY = map(mouseY, 30, 310, 180, -180);
  }
}

function mouseMoved() {
  // Track mouse for follow mode
  lastMouseX = mouseX;
  lastMouseY = mouseY;
}

function mouseOver() { mouseOverCanvas = true; }
function mouseOut() { mouseOverCanvas = false; }

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}