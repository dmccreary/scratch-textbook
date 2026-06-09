// Stage Layout and Boundaries - Interactive Microsim
// CANVAS_HEIGHT: 520
// p5.js simulation showing stage dimensions, boundaries, and what happens when sprites reach edges

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

// Stage dimensions (Scratch standard)
const STAGE_W = 480;
const STAGE_H = 360;
const SCALE = 0.8;

// Sprite state
let spriteX = 0;
let spriteY = 0;
let spriteW = 40;
let spriteH = 40;
let velocityX = 2;
let velocityY = 1.5;
let bounceMode = 'bounce'; // 'bounce', 'stop', 'wrap'
let showGrid = true;
let showCoordinates = true;
let isRunning = true;
let mouseOverCanvas = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive simulation of Scratch stage boundaries. Move the sprite and see how different boundary behaviors work: bounce, stop, or wrap around.', LABEL);

  // Controls
  createControls();
}

function createControls() {
  // Row 1
  startPauseButton = createButton('⏸ Pause');
  startPauseButton.position(margin, drawHeight + 10);
  startPauseButton.mousePressed(toggleRun);

  resetButton = createButton('Reset Position');
  resetButton.position(margin + 100, drawHeight + 10);
  resetButton.mousePressed(resetPosition);

  // Boundary mode dropdown
  boundarySelect = createSelect();
  boundarySelect.position(margin + 220, drawHeight + 10);
  boundarySelect.option('bounce', 'Bounce');
  boundarySelect.option('stop', 'Stop at Edge');
  boundarySelect.option('wrap', 'Wrap Around');
  boundarySelect.selected('bounce');
  boundarySelect.changed(() => bounceMode = boundarySelect.value());

  // Row 2
  showGridCheckbox = createCheckbox('Show Grid', true);
  showGridCheckbox.position(margin, drawHeight + 45);
  showGridCheckbox.changed(() => showGrid = showGridCheckbox.checked());

  showCoordCheckbox = createCheckbox('Show Coordinates', true);
  showCoordCheckbox.position(margin + 150, drawHeight + 45);
  showCoordCheckbox.changed(() => showCoordinates = showCoordCheckbox.checked());

  // Speed slider
  speedSlider = createSlider(0.5, 5, 1, 0.5);
  speedSlider.position(margin, drawHeight + 45);
  speedSlider.style('display', 'none'); // hidden initially

  // Speed label
  speedLabel = createDiv('Speed: 1.0x');
  speedLabel.style('display', 'none');
}

function draw() {
  updateCanvasSize();

  // Drawing area background
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Control area background
  fill('white');
  noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Draw stage boundary
  drawStage();

  // Draw grid
  if (showGrid) drawGrid();

  // Draw coordinates
  if (showCoordinates) drawCoordinates();

  // Update sprite position
  if (isRunning && mouseOverCanvas) {
    updateSprite();
  }

  // Draw sprite
  drawSprite();

  // Draw stage info
  drawStageInfo();

  // Control labels
  drawControlLabels();
}

function drawStage() {
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;

  // Stage background
  fill(240);
  stroke('#888');
  strokeWeight(2);
  rect(stageX, stageY, STAGE_W * SCALE, STAGE_H * SCALE);

  // Center lines
  stroke('#ddd');
  strokeWeight(1);
  line(stageX + STAGE_W * SCALE / 2, stageY, stageX + STAGE_W * SCALE / 2, stageY + STAGE_H * SCALE);
  line(stageX, stageY + STAGE_H * SCALE / 2, stageX + STAGE_W * SCALE, stageY + STAGE_H * SCALE);
}

function drawGrid() {
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;

  stroke('#eee');
  strokeWeight(1);

  // Vertical lines every 60 pixels (scaled)
  for (let x = -240; x <= 240; x += 60) {
    const sx = stageX + (x + 240) * SCALE;
    line(sx, stageY, sx, stageY + STAGE_H * SCALE);
  }

  // Horizontal lines every 60 pixels (scaled)
  for (let y = -180; y <= 180; y += 60) {
    const sy = stageY + (y + 180) * SCALE;
    line(stageX, sy, stageX + STAGE_W * SCALE, sy);
  }
}

function drawCoordinates() {
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;

  // Axis labels
  fill('black');
  noStroke();
  textSize(12);
  textAlign(CENTER, CENTER);

  // X axis labels
  textSize(10);
  for (let x = -240; x <= 240; x += 120) {
    const sx = stageX + (x + 240) * SCALE;
    text(x, stageX + (x + 240) * SCALE, stageY + STAGE_H * SCALE + 20);
  }
  text('X', stageX + STAGE_W * SCALE + 30, stageY + STAGE_H * SCALE / 2);

  // Y axis labels
  for (let y = -180; y <= 180; y += 90) {
    const sy = stageY + (y + 180) * SCALE;
    text(y, stageX - 30, stageY + (y + 180) * SCALE);
  }
  text('Y', stageX + STAGE_W * SCALE / 2, stageY - 15);
}

function drawSprite() {
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;

  // Convert sprite coords to screen coords
  const sx = stageX + (spriteX + 240) * SCALE;
  const sy = stageY + (180 - spriteY) * SCALE; // Y inverted

  // Draw sprite (simple cat-like shape)
  fill('#ff9e80');
  stroke('#cc6666');
  strokeWeight(2);

  // Body
  ellipse(sx, sy, spriteW * SCALE, spriteH * SCALE);

  // Ears
  triangle(
    sx - spriteW * SCALE * 0.3, sy - spriteH * SCALE * 0.3,
    sx - spriteW * SCALE * 0.5, sy - spriteH * SCALE * 0.7,
    sx - spriteW * SCALE * 0.1, sy - spriteH * SCALE * 0.7
  );
  triangle(
    sx + spriteW * SCALE * 0.3, sy - spriteH * SCALE * 0.3,
    sx + spriteW * SCALE * 0.1, sy - spriteH * SCALE * 0.7,
    sx + spriteW * SCALE * 0.5, sy - spriteH * SCALE * 0.7
  );

  // Eyes
  fill('white');
  ellipse(sx - 5, sy - 3, 8, 8);
  ellipse(sx + 5, sy - 3, 8, 8);
  fill('black');
  ellipse(sx - 4, sy - 3, 4, 4);
  ellipse(sx + 6, sy - 3, 4, 4);

  // Coordinate display above sprite
  fill('black');
  noStroke();
  textSize(12);
  textAlign(CENTER, BOTTOM);
  text(`(${Math.round(spriteX)}, ${Math.round(spriteY)})`, sx, sy - spriteH * SCALE / 2 - 10);
}

function drawStageInfo() {
  fill('black');
  noStroke();
  textSize(14);
  textAlign(LEFT, TOP);
  text(`Stage: ${STAGE_W}×${STAGE_H} pixels`, 20, 20);
  text(`Center: (0, 0)`, 20, 40);
  text(`X range: -240 to +240`, 20, 60);
  text(`Y range: -180 to +180`, 20, 80);
}

function updateSprite() {
  const speed = typeof speedSlider !== 'undefined' ? speedSlider.value() : 1;
  const nextX = spriteX + velocityX * speed;
  const nextY = spriteY + velocityY * speed;

  // Check boundaries based on bounceMode
  const maxX = 240 - spriteW / 2;
  const minX = -240 + spriteW / 2;
  const maxY = 180 - spriteH / 2;
  const minY = -180 + spriteH / 2;

  let hitBoundary = false;

  if (nextX > maxX || nextX < minX) {
    hitBoundary = true;
    if (bounceMode === 'bounce') {
      velocityX *= -1;
      spriteX = constrain(nextX, minX, maxX);
    } else if (bounceMode === 'stop') {
      velocityX = 0;
      spriteX = constrain(nextX, minX, maxX);
    } else if (bounceMode === 'wrap') {
      if (nextX > maxX) spriteX = minX;
      else if (nextX < minX) spriteX = maxX;
    }
  } else {
    spriteX = nextX;
  }

  if (nextY > maxY || nextY < minY) {
    hitBoundary = true;
    if (bounceMode === 'bounce') {
      velocityY *= -1;
      spriteY = constrain(nextY, minY, maxY);
    } else if (bounceMode === 'stop') {
      velocityY = 0;
      spriteY = constrain(nextY, minY, maxY);
    } else if (bounceMode === 'wrap') {
      if (nextY > maxY) spriteY = minY;
      else if (nextY < minY) spriteY = maxY;
    }
  } else {
    spriteY = nextY;
  }

  // Flash on boundary hit
  if (hitBoundary) {
    // Could add visual feedback here
  }
}

function toggleRun() {
  isRunning = !isRunning;
  if (startPauseButton) {
    startPauseButton.html(isRunning ? '⏸ Pause' : '▶ Play');
  }
}

function resetPosition() {
  spriteX = 0;
  spriteY = 0;
  velocityX = 2;
  velocityY = 1.5;
}

function drawControlLabels() {
  fill('#666');
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  text('Boundary: ' + bounceMode, margin + 330, drawHeight + 15);
  text('Speed: ' + (typeof speedSlider !== 'undefined' ? speedSlider.value() : 1) + 'x', margin + 330, drawHeight + 50);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
    if (typeof speedSlider !== 'undefined') {
      speedSlider.size(canvasWidth - sliderLeftMargin - margin);
    }
  }
}

function mouseMoved() {
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;
  const stageRight = stageX + STAGE_W * SCALE;
  const stageBottom = stageY + STAGE_H * SCALE;

  // Check if mouse is over stage area
  mouseOverCanvas = (mouseX >= stageX && mouseX <= stageRight &&
                     mouseY >= stageY && mouseY <= stageBottom);
}

function mouseClicked() {
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;

  if (mouseX >= stageX && mouseX <= stageX + STAGE_W * SCALE &&
      mouseY >= stageY && mouseY <= stageY + STAGE_H * SCALE) {
    // Click on stage - move sprite to click position
    spriteX = (mouseX - stageX - STAGE_W * SCALE / 2) / SCALE;
    spriteY = -(mouseY - stageY - STAGE_H * SCALE / 2) / SCALE;
    spriteX = constrain(spriteX, -240 + 20, 240 - 20);
    spriteY = constrain(spriteY, -180 + 20, 180 - 20);
  }
}