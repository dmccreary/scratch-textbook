// Three Tabs Explained - Interactive Diagram
// CANVAS_HEIGHT: 450

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 350;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

// Tab data for three tabs
const tabs = [
  {
    id: 'code',
    name: 'Code Tab',
    desc: 'Program your sprite here. Snap blocks together to create scripts.',
    x: 30, y: 50, w: 110, h: 150,
    color: '#e0e0e0',
    borderColor: '#aaa',
    iconColor: '#888',
    subItems: ['Scripts area', 'Blocks palette', 'Drag blocks here']
  },
  {
    id: 'costumes',
    name: 'Costumes Tab',
    desc: 'Draw and animate your sprite. Create frames for animation.',
    x: 150, y: 50, w: 110, h: 150,
    color: '#e8d0f8',
    borderColor: '#b19cd9',
    iconColor: '#9b59b6',
    subItems: ['Costume editor', 'Drawing tools', 'Costume list']
  },
  {
    id: 'sounds',
    name: 'Sounds Tab',
    desc: 'Add and edit sounds. Record, trim, or choose from library.',
    x: 270, y: 50, w: 110, h: 150,
    color: '#f8d0e8',
    borderColor: '#d98cb8',
    iconColor: '#e91e63',
    subItems: ['Sound editor', 'Waveform view', 'Recording']
  }
];

// State
let hoveredTab = null;
let clickedTab = null;
let activeView = 'overview'; // 'overview', 'code', 'costumes', 'sounds'

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive diagram showing the three Scratch editor tabs: Code, Costumes, and Sounds. Hover to see details, click to explore each tab.', LABEL);

  // Controls
  createControls();
}

function createControls() {
  // Reset button
  resetButton = createButton('Reset View');
  resetButton.position(margin, drawHeight + 10);
  resetButton.mousePressed(() => {
    clickedTab = null;
    activeView = 'overview';
  });

  // View radio buttons (simulated with buttons)
  viewOverviewBtn = createButton('Overview');
  viewOverviewBtn.position(margin + 100, drawHeight + 10);
  viewOverviewBtn.mousePressed(() => { activeView = 'overview'; clickedTab = null; });

  viewCodeBtn = createButton('Code Tab');
  viewCodeBtn.position(margin + 180, drawHeight + 10);
  viewCodeBtn.mousePressed(() => { activeView = 'code'; clickedTab = 'code'; });

  viewCostumesBtn = createButton('Costumes Tab');
  viewCostumesBtn.position(margin + 260, drawHeight + 10);
  viewCostumesBtn.mousePressed(() => { activeView = 'costumes'; clickedTab = 'costumes'; });

  viewSoundsBtn = createButton('Sounds Tab');
  viewSoundsBtn.position(margin + 340, drawHeight + 10);
  viewSoundsBtn.mousePressed(() => { activeView = 'sounds'; clickedTab = 'sounds'; });
}

function draw() {
  updateCanvasSize();

  // Drawing area background
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  noStroke();

  // Control area background
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  if (activeView === 'overview') {
    drawOverview();
  } else if (activeView === 'code') {
    drawTabDetail(tabs[0]);
  } else if (activeView === 'costumes') {
    drawTabDetail(tabs[1]);
  } else if (activeView === 'sounds') {
    drawTabDetail(tabs[2]);
  }

  // Control area labels
  drawControlLabels();
}

function drawOverview() {
  // Draw three tab panels side by side
  for (let tab of tabs) {
    const isClicked = clickedTab === tab.id;
    const baseColor = tab.color;

    // Panel background
    fill(baseColor);
    stroke(isClicked ? '#ff9800' : tab.borderColor);
    strokeWeight(isClicked ? 3 : 1);
    rect(tab.x, tab.y, tab.w, tab.h, 8);
    noStroke();

    // Tab header
    fill('white');
    stroke(tab.borderColor);
    strokeWeight(1);
    rect(tab.x, tab.y, tab.w, 35, 8, 8, 0, 0);
    fill(tab.iconColor);
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);
    text(tab.name, tab.x + tab.w/2, tab.y + 17);

    // Sub-items
    fill('black');
    textSize(12);
    textAlign(LEFT, TOP);
    let itemY = tab.y + 45;
    for (let item of tab.subItems) {
      text('• ' + item, tab.x + 10, itemY);
      itemY += 22;
    }

    // Click indicator
    if (isClicked) {
      noFill();
      stroke('#ff9800');
      strokeWeight(3);
      rect(tab.x, tab.y, tab.w, tab.h, 8);
    }
  }

  // Connection arrows
  stroke('#ff9800');
  strokeWeight(2);
  noFill();
  
  // Arrow from sprite to tabs
  const spriteCenterX = canvasWidth / 2;
  const spriteBottomY = 20;
  for (let tab of tabs) {
    const tabTopY = tab.y;
    const tabCenterX = tab.x + tab.w / 2;
    
    // Curved line from sprite to tab
    beginShape();
    vertex(spriteCenterX, spriteBottomY);
    quadraticVertex(spriteCenterX, (spriteBottomY + tabTopY) / 2, tabCenterX, tabTopY);
    endShape();
    
    // Arrowhead at tab
    push();
    translate(tabCenterX, tabTopY);
    rotate(-PI/2);
    fill('#ff9800');
    noStroke();
    triangle(0, 0, -6, -6, 6, -6);
    pop();
  }
}

function drawTabDetail(tab) {
  // Draw the selected tab in detail
  const panelX = 30;
  const panelY = 40;
  const panelW = canvasWidth - 60;
  const panelH = drawHeight - 80;

  // Panel background
  fill(tab.color);
  stroke('#ff9800');
  strokeWeight(3);
  rect(panelX, panelY, panelW, panelH, 12);
  noStroke();

  // Header
  fill('white');
  stroke(tab.borderColor);
  strokeWeight(1);
  rect(panelX, panelY, panelW, 45, 8, 8, 0, 0);
  fill(tab.iconColor);
  noStroke();
  textSize(22);
  textAlign(CENTER, CENTER);
  text(tab.name, panelX + panelW/2, panelY + 22);

  // Description
  fill('black');
  noStroke();
  textSize(14);
  textAlign(LEFT, TOP);
  text(tab.desc, panelX + 20, panelY + 55);

  // Features
  textSize(14);
  let itemY = panelY + 95;
  textSize(16);
  text('Key Features:', panelX + 20, itemY);
  itemY += 25;
  textSize(13);
  for (let item of tab.subItems) {
    text('✓ ' + item, panelX + 30, itemY);
    itemY += 22;
  }

  // Back prompt
  fill('#666');
  textSize(13);
  textAlign(CENTER, CENTER);
  text('Click "Overview" or "Reset View" to return', canvasWidth/2, drawHeight - 15);
}

function drawControlLabels() {
  fill('#666');
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  text('Click a tab button above or click a panel in overview to explore.', margin, drawHeight + 10);
  text('Each sprite has its own Code, Costumes, and Sounds tabs.', margin, drawHeight + 30);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
    if (typeof viewOverviewBtn !== 'undefined') {
      viewOverviewBtn.position(margin + 100, drawHeight + 10);
      viewCodeBtn.position(margin + 180, drawHeight + 10);
      viewCostumesBtn.position(margin + 260, drawHeight + 10);
      viewSoundsBtn.position(margin + 340, drawHeight + 10);
      resetButton.position(margin, drawHeight + 10);
    }
  }
}