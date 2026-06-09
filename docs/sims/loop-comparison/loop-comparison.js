// Loop Comparison - Microsim
// CANVAS_HEIGHT: 500

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let defaultTextSize = 16;

// Loop types
const loopTypes = [
  {
    id: 'repeat',
    name: 'repeat (10)',
    desc: 'Runs exactly N times. Good when you know how many repetitions.',
    color: '#4C97FF',
    icon: '🔁',
    example: 'repeat 4\n  move 100 steps\n  turn 90°\nend\n// Draws a square!',
    category: 'counted'
  },
  {
    id: 'forever',
    name: 'forever',
    desc: 'Runs continuously until stopped. The game engine heartbeat.',
    color: '#FF9900',
    icon: '∞',
    example: 'forever\n  if <key right?> then\n    change x by 5\n  end\nend\n// Continuous movement!',
    category: 'continuous'
  },
  {
    id: 'repeatuntil',
    name: 'repeat until < >',
    desc: 'Runs until condition becomes TRUE. Smart loop with exit condition.',
    color: '#E67E22',
    icon: '🎯',
    example: 'repeat until <touching edge?>\n  move 5 steps\nend\n// Moves until edge!',
    category: 'conditional'
  }
];

let selectedLoop = 0;
let animationPhase = 0;
let animating = false;
let iteration = 0;
let maxIterations = 10;
let spriteX = 0;
let spriteY = 0;
let angle = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive comparison of three Scratch loop types: repeat (counted), forever (continuous), and repeat until (conditional). Select a loop to see it in action.', LABEL);

  createControls();
}

function createControls() {
  // Loop selector buttons
  for (let i = 0; i < 3; i++) {
    const btn = createButton(loopTypes[i].icon + ' ' + loopTypes[i].name);
    btn.position(margin + i * 130, drawHeight + 10);
    btn.style('width', '125px');
    btn.style('font-size', '11px');
    btn.style('padding', '4px 8px');
    btn.mousePressed(() => { selectedLoop = i; resetAnimation(); });
    if (i === 0) btn.style('background', '#ff9800');
  }

  // Control buttons
  startBtn = createButton('▶ Start');
  startBtn.position(margin, drawHeight + 50);
  startBtn.mousePressed(() => { animating = true; });

  pauseBtn = createButton('⏸ Pause');
  pauseBtn.position(margin + 80, drawHeight + 50);
  pauseBtn.mousePressed(() => { animating = false; });

  resetBtn = createButton('🔄 Reset');
  resetBtn.position(margin + 160, drawHeight + 50);
  resetBtn.mousePressed(() => resetAnimation());

  // Speed slider
  speedLabel = createDiv('Speed:');
  speedLabel.position(margin + 250, drawHeight + 10);
  speedLabel.style('font-size', '11px');
  speedLabel.style('color', '#666');

  speedSlider = createSlider(1, 10, 5, 1);
  speedSlider.position(margin + 290, drawHeight + 10);
  speedSlider.style('width', '80px');

  // Iteration counter
  iterDisplay = createDiv('Iteration: 0 / 10');
  iterDisplay.position(margin + 280, drawHeight + 50);
  iterDisplay.style('font-family', 'monospace');
  iterDisplay.style('font-size', '12px');
  iterDisplay.style('color', '#666');
}

function draw() {
  updateCanvasSize();

  // Background
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  // Control area
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Title
  fill('black');
  noStroke();
  textSize(18);
  textAlign(CENTER, TOP);
  text('Loop Comparison', canvasWidth / 2, 10);

  // Subtitle
  textSize(11);
  fill('#666');
  text('Compare three Scratch loop types. Select one to see it animate!', canvasWidth / 2, 32);

  // Draw selected loop visualization
  drawLoopVisualization();

  // Selected loop info
  drawLoopInfo();

  // Update iteration display
  iterDisplay.html('Iteration: ' + iteration + ' / ' + maxIterations);

  // Animate if running
  if (animating) {
    animateLoop();
  }

  // Control labels
  drawControlLabels();
}

function drawLoopVisualization() {
  const loop = loopTypes[selectedLoop];
  const simX = canvasWidth / 2;
  const simY = 120;
  const simSize = 150;

  // Draw stage area
  fill('#f0f0f0');
  stroke('#ccc');
  rect(canvasWidth/2 - 120, 60, 240, 200);
  noStroke();

  // Draw based on loop type
  if (selectedLoop === 0) {
    drawRepeatAnimation();
  } else if (selectedLoop === 1) {
    drawForeverAnimation();
  } else if (selectedLoop === 2) {
    drawRepeatUntilAnimation();
  }

  // Loop info panel
  drawLoopInfoPanel();
}

function drawRepeatAnimation() {
  if (!animating) return;
  
  animationPhase += 0.02 * speedSlider.value();
  if (animationPhase > 1) {
    animationPhase = 0;
    iteration++;
    if (iteration >= maxIterations) {
      animating = false;
      iteration = maxIterations;
    }
  }

  // Draw square path
  const cx = canvasWidth / 2;
  const cy = 160;
  
  // Square path
  stroke('#4C97FF');
  strokeWeight(2);
  noFill();
  rect(cx - 60, cy - 60, 120, 120);
  
  // Moving sprite along square path
  const progress = animationPhase;
  const side = floor(progress * 4) % 4;
  const localProgress = (progress * 4) % 1;
  
  let px, py;
  if (side === 0) { // right
    px = cx - 60 + 120 * localProgress;
    py = cy - 60;
  } else if (side === 1) { // down
    px = cx + 60;
    py = cy - 60 + 120 * localProgress;
  } else if (side === 2) { // left
    px = cx + 60 - 120 * localProgress;
    py = cy + 60;
  } else { // up
    px = cx - 60;
    py = cy + 60 - 120 * localProgress;
  }

  // Draw sprite
  fill('#4C97FF');
  noStroke();
  ellipse(px, py, 30, 30);
  fill('white');
  textSize(14);
  textAlign(CENTER, CENTER);
  text('🔵', px, py + 4);
}

function drawForeverAnimation() {
  if (!animating) return;
  
  animationPhase += 0.03;
  
  // Continuous background scroll effect
  const cx = canvasWidth / 2;
  const cy = 160;
  
  // Draw scrolling background lines
  stroke('#ddd');
  strokeWeight(1);
  for (let i = 0; i < 10; i++) {
    const y = (cy - 60 + i * 30 + animationPhase * 20) % 200 - 60 + cy;
    if (y > 100 && y < 260) {
      line(cx - 100, y, cx + 100, y);
    }
  }
  
  // Moving sprite with bounce
  const spriteX = canvasWidth / 2 + 80 * sin(animationPhase * 2);
  
  fill('#FF9900');
  noStroke();
  ellipse(spriteX, 160, 40, 40);
  fill('white');
  textSize(16);
  textAlign(CENTER, CENTER);
  text('🎮', spriteX, 164);
  
  // Bouncing balls
  for (let i = 0; i < 3; i++) {
    const bx = 150 + i * 80 + 50 * sin(animationPhase * 3 + i * 2);
    const by = 160 + 50 * sin(animationPhase * 4 + i * 1.5);
    fill(['#FF6B6B', '#4ECDC4', '#FFD93D'][i]);
    ellipse(bx, by, 25, 25);
  }
}

function drawRepeatUntilAnimation() {
  if (!animating) return;
  
  animationPhase += 0.02;
  
  // Sprite moves toward right edge
  const progress = min(animationPhase, 1);
  const startX = 80;
  const endX = 320;
  const cx = lerp(startX, endX, progress);
  const cy = 160;
  
  // Path line
  stroke('#E67E22');
  strokeWeight(2);
  line(80, 160, 320, 160);
  noStroke();
  
  // Target edge
  fill('#E67E22');
  rect(320, 120, 4, 80);
  
  // Moving sprite
  fill('#E67E22');
  ellipse(cx, 160, 30, 30);
  fill('white');
  textSize(14);
  textAlign(CENTER, CENTER);
  text('🎯', cx, 164);
  
  // Distance indicator
  fill('#666');
  textSize(10);
  textAlign(CENTER, CENTER);
  const dist = round(320 - cx);
  text('Distance to edge: ' + dist + ' px', canvasWidth/2, 280);
  
  if (progress >= 1) {
    animating = false;
    iteration = maxIterations;
  }
}

function drawLoopInfoPanel() {
  const loop = loopTypes[selectedLoop];
  
  // Info panel
  fill('#f5f5f5');
  stroke('#ddd');
  rect(10, 10, 180, 130, 8);
  
  fill('black');
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  text(loop.icon + ' ' + loop.name, 15, 15);
  
  textSize(10);
  fill('#666');
  text(loop.desc, 15, 35, 170, 40);
  
  fill('#333');
  textSize(10);
  text('Example:', 15, 85);
  textSize(9);
  text(loop.example, 15, 100, 170, 40);
}

function resetAnimation() {
  animating = false;
  animationPhase = 0;
  iteration = 0;
}

function animateLoop() {
  // Animation handled in draw functions
}

function drawControlLabels() {
  fill('#666');
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  text('Use Start/Pause/Reset to control animation. Adjust speed with slider.', margin, drawHeight + 10);
  text('Speed slider controls animation speed. Max 10 iterations per run.', margin, drawHeight + 22);
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

function createControls() {
  // Loop selector
  for (let i = 0; i < 3; i++) {
    const btn = createButton(loopTypes[i].icon + ' ' + loopTypes[i].name);
    btn.position(margin + i * 130, drawHeight + 10);
    btn.style('width', '125px');
    btn.style('font-size', '11px');
    btn.style('padding', '4px 8px');
    btn.mousePressed(() => { selectedLoop = i; resetAnimation(); });
    if (i === 0) btn.style('background', '#ff9800');
  }

  startBtn = createButton('▶ Start');
  startBtn.position(margin, drawHeight + 50);
  startBtn.mousePressed(() => { animating = true; });

  pauseBtn = createButton('⏸ Pause');
  pauseBtn.position(margin + 80, drawHeight + 50);
  pauseBtn.mousePressed(() => { animating = false; });

  resetBtn = createButton('🔄 Reset');
  resetBtn.position(margin + 160, drawHeight + 50);
  resetBtn.mousePressed(resetAnimation);

  speedLabel = createDiv('Speed:');
  speedLabel.position(margin + 250, drawHeight + 10);
  speedLabel.style('font-size', '11px');
  speedLabel.style('color', '#666');

  speedSlider = createSlider(1, 10, 5, 1);
  speedSlider.position(margin + 290, drawHeight + 10);
  speedSlider.style('width', '80px');

  iterDisplay = createDiv('Iteration: 0 / 10');
  iterDisplay.position(margin + 280, drawHeight + 50);
  iterDisplay.style('font-family', 'monospace');
  iterDisplay.style('font-size', '12px');
  iterDisplay.style('color', '#666');
}