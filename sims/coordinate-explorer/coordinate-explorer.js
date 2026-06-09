// Interactive Coordinate Explorer - Microsim
// CANVAS_HEIGHT: 550
// p5.js simulation for exploring Scratch coordinate system

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 90;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

// Stage dimensions (Scratch standard)
const STAGE_W = 480;
const STAGE_H = 360;
const SCALE = 0.8;

// Target sprite
let targetX = 0;
let targetY = 0;
let showGrid = true;
let showQuadrants = true;
let showAxes = true;
let quizMode = false;
let quizTargetX = 0;
let quizTargetY = 0;
let quizScore = 0;
let quizAttempts = 0;
let quizMessage = '';
let showQuiz = false;
let mouseOverCanvas = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive Scratch coordinate explorer. Click on the stage to place a sprite and see its coordinates. Learn the Scratch coordinate system with quadrants.');

  // Generate first quiz target
  generateQuizTarget();

  // Controls
  createControls();
}

function createControls() {
  // Row 1
  showGridCheckbox = createCheckbox('Show Grid', true);
  showGridCheckbox.position(margin, drawHeight + 12);
  showGridCheckbox.changed(() => showGrid = showGridCheckbox.checked());

  showQuadrantsCheckbox = createCheckbox('Show Quadrants', true);
  showQuadrantsCheckbox.position(margin + 130, drawHeight + 12);
  showQuadrantsCheckbox.changed(() => showQuadrants = showQuadrantsCheckbox.checked());

  showAxesCheckbox = createCheckbox('Show Axes', true);
  showAxesCheckbox.position(margin + 290, drawHeight + 12);
  showAxesCheckbox.changed(() => showAxes = showAxesCheckbox.checked());

  // Row 2
  quizModeCheckbox = createCheckbox('Quiz Mode', false);
  quizModeCheckbox.position(margin, drawHeight + 50);
  quizModeCheckbox.changed(() => {
    showQuiz = quizModeCheckbox.checked();
    if (showQuiz) generateQuizTarget();
    else quizMessage = '';
  });

  quizTargetButton = createButton('New Target');
  quizTargetButton.position(margin + 130, drawHeight + 50);
  quizTargetButton.style('display', 'none');
  quizTargetButton.mousePressed(generateQuizTarget);

  showQuizCheckbox = createCheckbox('Show Target', false);
  showQuizCheckbox.position(margin + 250, drawHeight + 50);
  showQuizCheckbox.changed(() => showQuiz = showQuizCheckbox.checked());
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

  // Draw quadrants
  if (showQuadrants) drawQuadrants();

  // Draw axes
  if (showAxes) drawAxes();

  // Draw quiz target
  if (showQuiz) drawQuizTarget();

  // Draw target sprite
  drawTarget();

  // Coordinate display
  drawCoordinateDisplay();

  // Quiz message
  if (showQuiz && quizMessage) {
    drawQuizMessage();
  }

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

function drawQuadrants() {
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;

  noStroke();
  // Q1: top-right (+x, +y)
  fill(255, 200, 200, 50);
  rect(stageX + STAGE_W * SCALE / 2, stageY, STAGE_W * SCALE / 2, STAGE_H * SCALE / 2);
  // Q2: top-left (-x, +y)
  fill(200, 255, 200, 50);
  rect(stageX, stageY, STAGE_W * SCALE / 2, STAGE_H * SCALE / 2);
  // Q3: bottom-left (-x, -y)
  fill(200, 200, 255, 50);
  rect(stageX, stageY + STAGE_H * SCALE / 2, STAGE_W * SCALE / 2, STAGE_H * SCALE / 2);
  // Q4: bottom-right (+x, -y)
  fill(255, 255, 200, 50);
  rect(stageX + STAGE_W * SCALE / 2, stageY + STAGE_H * SCALE / 2, STAGE_W * SCALE / 2, STAGE_H * SCALE / 2);

  // Quadrant labels
  fill('black');
  noStroke();
  textSize(14);
  textAlign(CENTER, CENTER);
  text('Q1 (+,+)', (canvasWidth + stageX + STAGE_W * SCALE / 2) / 2, stageY + STAGE_H * SCALE / 4);
  text('Q2 (-,+)', (stageX + stageX + STAGE_W * SCALE / 2) / 2, stageY + STAGE_H * SCALE / 4);
  text('Q3 (-,-)', (stageX + stageX + STAGE_W * SCALE / 2) / 2, stageY + 3 * STAGE_H * SCALE / 4);
  text('Q4 (+,-)', (canvasWidth + stageX + STAGE_W * SCALE / 2) / 2, stageY + 3 * STAGE_H * SCALE / 4);
}

function drawAxes() {
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;

  stroke('black');
  strokeWeight(2);

  // X axis
  line(stageX, stageY + STAGE_H * SCALE / 2, stageX + STAGE_W * SCALE, stageY + STAGE_H * SCALE / 2);
  // Y axis
  line(stageX + STAGE_W * SCALE / 2, stageY, stageX + STAGE_W * SCALE / 2, stageY + STAGE_H * SCALE);

  // Arrow heads
  fill('black');
  noStroke();
  // X arrow
  triangle(stageX + STAGE_W * SCALE - 10, stageY + STAGE_H * SCALE / 2 - 5,
           stageX + STAGE_W * SCALE - 10, stageY + STAGE_H * SCALE / 2 + 5,
           stageX + STAGE_W * SCALE, stageY + STAGE_H * SCALE / 2);
  // Y arrow
  triangle(stageX + STAGE_W * SCALE / 2 - 5, stageY + 10,
           stageX + STAGE_W * SCALE / 2 + 5, stageY + 10,
           stageX + STAGE_W * SCALE / 2, stageY);

  // Axis labels
  fill('black');
  noStroke();
  textSize(14);
  textAlign(CENTER, CENTER);
  text('X', stageX + STAGE_W * SCALE - 20, stageY + STAGE_H * SCALE / 2 + 20);
  text('Y', stageX + STAGE_W * SCALE / 2 - 20, stageY + 20);
}

function drawTarget() {
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;

  // Convert coords to screen
  const sx = stageX + (targetX + 240) * SCALE;
  const sy = stageY + (180 - targetY) * SCALE;

  // Target sprite (star)
  push();
  translate(sx, sy);
  fill('#ffcc00');
  stroke('#cc8800');
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < 10; i++) {
    const angle = TWO_PI * i / 10 - HALF_PI;
    const r = (i % 2 === 0) ? 20 : 10;
    vertex(cos(angle) * r, sin(angle) * r);
  }
  endShape(CLOSE);
  pop();

  // Coordinate label
  fill('black');
  noStroke();
  textSize(12);
  textAlign(CENTER, BOTTOM);
  text(`(${targetX}, ${targetY})`, sx, sy - 25);
}

function drawCoordinateDisplay() {
  // Info panel drawn ABOVE the stage (stage starts at y = 81),
  // as an opaque white rounded box so it never collides with quadrant labels.
  fill('white');
  stroke('#ccc');
  strokeWeight(1);
  rect(10, 8, 180, 66, 6);

  fill('black');
  noStroke();
  textSize(16);
  textAlign(LEFT, TOP);
  text(`x: ${targetX}`, 20, 14);
  text(`y: ${targetY}`, 100, 14);

  // Quadrant indicator
  let quad = '';
  if (targetX > 0 && targetY > 0) quad = 'Q1 (+,+)';
  else if (targetX < 0 && targetY > 0) quad = 'Q2 (-,+)';
  else if (targetX < 0 && targetY < 0) quad = 'Q3 (-,-)';
  else if (targetX > 0 && targetY < 0) quad = 'Q4 (+,-)';
  else if (targetX === 0 && targetY === 0) quad = 'Center (0,0)';
  else if (targetX === 0) quad = 'Y-axis';
  else quad = 'X-axis';

  textSize(14);
  text(`Quadrant: ${quad}`, 20, 44);
}

function drawQuizTarget() {
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;

  const sx = stageX + (quizTargetX + 240) * SCALE;
  const sy = stageY + (180 - quizTargetY) * SCALE;

  // Pulsing target
  const pulse = sin(frameCount * 0.1) * 5 + 20;
  noFill();
  stroke('#ff4444');
  strokeWeight(3);
  ellipse(sx, sy, pulse, pulse);
  ellipse(sx, sy, pulse / 2, pulse / 2);
}

function drawQuizMessage() {
  fill('#ff4444');
  noStroke();
  textSize(16);
  textAlign(CENTER, CENTER);
  text(quizMessage, canvasWidth / 2, drawHeight - 30);
}

function drawControlLabels() {
  // Hint rendered inside the draw area, near its bottom edge (stage ends at y = 369)
  fill('#666');
  noStroke();
  textSize(11);
  textAlign(CENTER, BOTTOM);
  text('Click on stage to place the target. Quiz mode: click the pulsing target to score!', canvasWidth / 2, drawHeight - 10);

  if (showQuiz) {
    textSize(14);
    textAlign(RIGHT, TOP);
    fill('#333');
    text(`Score: ${quizScore} / ${quizAttempts}`, canvasWidth - margin, 14);
  }
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
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;
  const stageRight = stageX + STAGE_W * SCALE;
  const stageBottom = stageY + STAGE_H * SCALE;

  mouseOverCanvas = (mouseX >= stageX && mouseX <= stageRight &&
                     mouseY >= stageY && mouseY <= stageBottom);

  // Update target position if not in quiz mode
  if (mouseOverCanvas && !showQuiz) {
    targetX = Math.round((mouseX - (stageX + STAGE_W * SCALE / 2)) / SCALE);
    targetY = Math.round((stageY + STAGE_H * SCALE / 2 - mouseY) / SCALE);
    targetX = constrain(targetX, -240, 240);
    targetY = constrain(targetY, -180, 180);
  }
}

function mouseClicked() {
  const stageX = (canvasWidth - STAGE_W * SCALE) / 2;
  const stageY = (drawHeight - STAGE_H * SCALE) / 2;

  if (mouseX >= stageX && mouseX <= stageX + STAGE_W * SCALE &&
      mouseY >= stageY && mouseY <= stageY + STAGE_H * SCALE) {
    const clickX = Math.round((mouseX - (stageX + STAGE_W * SCALE / 2)) / SCALE);
    const clickY = Math.round((stageY + STAGE_H * SCALE / 2 - mouseY) / SCALE);

    if (showQuiz) {
      quizAttempts++;
      if (clickX === quizTargetX && clickY === quizTargetY) {
        quizScore++;
        quizMessage = '✅ Correct!';
        generateQuizTarget();
      } else {
        quizMessage = `❌ Missed! Target was (${quizTargetX}, ${quizTargetY})`;
      }
    } else {
      // Place target
      targetX = clickX;
      targetY = clickY;
    }
  }
}

function generateQuizTarget() {
  quizTargetX = Math.floor(random(-240, 241));
  quizTargetY = Math.floor(random(-180, 181));
  // Avoid center
  if (quizTargetX === 0 && quizTargetY === 0) {
    quizTargetX = 100;
  }
}