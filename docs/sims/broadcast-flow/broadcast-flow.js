// Broadcast Flow - Interactive Diagram
// CANVAS_HEIGHT: 500

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let defaultTextSize = 16;

// Sprites in the broadcast system
const sprites = [
  { id: 'sender', name: 'Controller', x: 50, y: 150, w: 90, h: 80, color: '#4C97FF', role: 'broadcasts' },
  { id: 'receiver1', name: 'Player', x: 200, y: 60, w: 90, h: 80, color: '#9966FF', role: 'receives' },
  { id: 'receiver2', name: 'Enemy', x: 350, y: 60, w: 90, h: 80, color: '#FF6666', role: 'receives' },
  { id: 'receiver3', name: 'UI', x: 350, y: 240, w: 90, h: 80, color: '#FFD700', role: 'receives' },
  { id: 'receiver4', name: 'UI', x: 350, y: 240, w: 90, h: 80, color: '#FFD700', role: 'receives' },
  { id: 'receiver5', name: 'Sound', x: 200, y: 240, w: 90, h: 80, color: '#FF66FF', role: 'receives' }
];

// Broadcast messages
const broadcasts = [
  { name: 'game-start', from: 'sender', to: ['receiver1','receiver2','receiver3','receiver4','receiver5'], sync: true },
  { name: 'player-hit', from: 'receiver2', to: ['sender','receiver3','receiver4','receiver5'], sync: false },
  { name: 'coin-collected', from: 'receiver1', to: ['receiver3','receiver4','receiver5'], sync: false },
  { name: 'level-complete', from: 'sender', to: ['receiver1','receiver2','receiver3','receiver4','receiver5'], sync: true },
  { name: 'game-over', from: 'sender', to: ['receiver1','receiver2','receiver3','receiver4','receiver5'], sync: true }
];

// State
let selectedBroadcast = 0;
let animating = false;
let animProgress = 0;
let animFrom = null;
let animTo = null;
let showCode = true;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive broadcast flow diagram. Select a broadcast message to see how it flows from sender to receivers. Toggle sync/async mode.', LABEL);

  createControls();
}

function createControls() {
  // Broadcast selector
  for (let i = 0; i < broadcasts.length; i++) {
    const btn = createButton(broadcasts[i].name);
    btn.position(margin + i * 78, drawHeight + 10);
    btn.style('width', '75px');
    btn.style('font-size', '10px');
    btn.style('padding', '2px 4px');
    btn.mousePressed(() => { selectedBroadcast = i; triggerAnimation(); });
    if (i === 0) btn.style('background', '#ff9800');
  }

  // Sync/Async toggle
  syncCheckbox = createCheckbox('Show "and wait" sync', false);
  syncCheckbox.position(margin, drawHeight + 40);

  // Show code checkbox
  codeCheckbox = createCheckbox('Show code snippets', true);
  codeCheckbox.position(margin + 180, drawHeight + 40);
  codeCheckbox.changed(() => showCode = codeCheckbox.checked());

  // Trigger button
  triggerBtn = createButton('Trigger Broadcast');
  triggerBtn.position(margin, drawHeight + 70);
  triggerBtn.mousePressed(() => triggerAnimation());
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
  text('Broadcast Flow', canvasWidth / 2, 10);

  // Subtitle
  textSize(11);
  fill('#666');
  text('Select a broadcast message to see how it flows between sprites', canvasWidth / 2, 32);

  // Draw sprites
  drawSprites();

  // Draw broadcast animation
  if (animating) {
    drawAnimation();
  }

  // Show selected broadcast info
  drawBroadcastInfo();

  // Control labels
  drawControlLabels();
}

function drawSprites() {
  for (let s of sprites) {
    const isActive = s.id === animFrom || sprites.filter(r => !r.includes(s.id)).some(r => r === s.id && false);
    
    // Sprite box
    fill(s.color);
    stroke(isAnimating(s.id) ? '#ff9800' : '#aaa');
    strokeWeight(isAnimating(s.id) ? 3 : 1);
    rect(s.x, s.y, s.w, s.h, 8);
    noStroke();

    // Role badge
    fill('white');
    noStroke();
    textSize(9);
    textAlign(CENTER, TOP);
    text(s.role.toUpperCase(), s.x + s.w/2, s.y + 5);

    // Sprite name
    fill('white');
    textSize(12);
    textAlign(CENTER, CENTER);
    text(s.name, s.x + s.w/2, s.y + 35);

    // Role icon
    if (s.role === 'broadcasts') {
      fill('#FFD700');
      textSize(24);
      text('📢', s.x + s.w/2 - 12, s.y + 55);
    } else {
      fill('#4CAF50');
      textSize(24);
      text('📥', s.x + s.w/2 - 12, s.y + 55);
    }
  }
}

function isAnimating(id) {
  if (!animating) return false;
  const b = broadcasts[selectedBroadcast];
  return id === b.from || b.to.includes(id);
}

function drawAnimation() {
  const b = broadcasts[selectedBroadcast];
  const fromSprite = sprites.find(s => s.id === b.from);
  const toSprites = b.to.map(id => sprites.find(s => s.id === id)).filter(s => s);

  animProgress += 0.02;
  if (animProgress > 1) {
    animProgress = 0;
    if (!syncCheckbox.checked()) animating = false;
  }

  // Draw animated pulses from sender to each receiver
  for (let toSprite of toSprites) {
    const fx = byId(b.from).x + 45;
    const fy = byId(b.from).y + 40;
    const ts = byId(toSprite.id);
    const tx = ts.x + 45;
    const ty = ts.y + 40;

    const px = lerp(fx, tx, animProgress);
    const py = lerp(fy, ty, animProgress);

    // Draw pulse
    fill('#ff9800');
    noStroke();
    const size = 8 + 8 * sin(animProgress * PI * 4);
    ellipse(px, py, size);
    
    // Message label
    if (animProgress > 0.5) {
      fill('#ff9800');
      noStroke();
      textSize(9);
      textAlign(CENTER, CENTER);
      text(b.name, (fx + tx)/2, (fy + ty)/2 - 15);
    }
  }

  // End animation after all receivers get it
  if (animProgress > 1 && !syncCheckbox.checked()) {
    animating = false;
  }
}

function byId(id) {
  return sprites.find(s => s.id === id);
}

function triggerAnimation() {
  animating = true;
  animProgress = 0;
  animFrom = broadcasts[selectedBroadcast].from;
  animTo = broadcasts[selectedBroadcast].to;
}

function drawBroadcastInfo() {
  const b = broadcasts[selectedBroadcast];
  const infoX = margin;
  const infoY = 10;
  const infoW = 180;
  const infoH = 200;

  // Info panel background
  fill('#f5f5f5');
  stroke('#ddd');
  rect(10, 10, infoW, infoH, 8);

  fill('black');
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  text('Broadcast: ' + b.name, 15, 15);

  fill('#666');
  textSize(10);
  text('From: ' + byId(b.from).name, 15, 35);

  text('To:', 15, 55);
  let ty = 70;
  for (let toId of b.to) {
    text('• ' + byId(toId).name, 20, ty);
    ty += 15;
  }

  const syncText = b.sync ? 'SYNC (broadcast and wait)' : 'ASYNC (broadcast)';
  fill(b.sync ? '#4CAF50' : '#FF9800');
  textSize(10);
  text(syncText, 15, ty + 10);

  // Code snippet
  if (showCode) {
    fill('#f8f8f8');
    stroke('#ddd');
    rect(10, 150, infoW, 50, 4);
    fill('#333');
    textSize(9);
    textAlign(LEFT, TOP);
    text('when I receive [' + b.name + ' v]', 15, 155);
    text('  // sprite reacts here', 15, 170);
  }
}

function byId(id) {
  return sprites.find(s => s.id === id);
}

function drawControlLabels() {
  fill('#666');
  noStroke();
  textSize(11);
  textAlign(LEFT, TOP);
  text('Select a broadcast message, then click "Trigger Broadcast" to see the flow.', margin, drawHeight + 10);
  text('Use "Show code snippets" to see the Scratch block representation.', margin, drawHeight + 22);
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