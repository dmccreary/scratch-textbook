// Scratch Editor Overview - Interactive Diagram
// CANVAS_HEIGHT: 500
// p5.js interactive diagram showing Scratch editor regions with hover tooltips

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

// Editor regions data
const regions = [
  {
    id: 'stage',
    name: 'Stage Area',
    desc: 'Where your project runs (480 × 360 pixels). Sprites perform here.',
    x: 200, y: 50, w: 320, h: 260,
    color: '#f0f0f0',
    borderColor: '#888',
    label: 'Stage (480 × 360 px)'
  },
  {
    id: 'spritePane',
    name: 'Sprite Pane',
    desc: 'Shows all your sprites. Click to select, right-click for options.',
    x: 20, y: 320, w: 160, h: 100,
    color: '#e0e0e0',
    borderColor: '#999',
    label: 'Sprite Pane'
  },
  {
    id: 'blocksPalette',
    name: 'Blocks Palette',
    desc: 'Color-coded categories of blocks. Drag blocks from here into the code area.',
    x: 20, y: 50, w: 160, h: 260,
    color: '#e8e8e8',
    borderColor: '#999',
    label: 'Blocks Palette'
  },
  {
    id: 'codeArea',
    name: 'Code Area',
    desc: 'Snap blocks together here to program the selected sprite.',
    x: 200, y: 320, w: 320, h: 100,
    color: '#f5f5f5',
    borderColor: '#aaa',
    label: 'Code Area'
  },
  {
    id: 'tabs',
    name: 'Tabs',
    desc: 'Switch between Code, Costumes, and Sounds editors for the selected sprite.',
    x: 200, y: 290, w: 320, h: 30,
    color: '#e0e0e0',
    borderColor: '#888',
    label: 'Tabs: Code / Costumes / Sounds'
  },
  {
    id: 'toolbar',
    name: 'Toolbar',
    desc: 'File menu, save, share, green flag (start), stop sign (stop).',
    x: 420, y: 30, w: 100, h: 20,
    color: '#f0f0f0',
    borderColor: '#aaa',
    label: 'Toolbar'
  }
];

// State
let hoveredRegion = null;
let clickedRegion = null;
let showLabels = true;
let showConnections = true;

// Connection lines between regions
const connections = [
  { from: 'blocksPalette', to: 'codeArea', label: 'Drag blocks →' },
  { from: 'codeArea', to: 'stage', label: 'Run program →' },
  { from: 'spritePane', to: 'codeArea', label: 'Select sprite →' },
  { from: 'tabs', to: 'codeArea', label: 'Switch editor →' }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Accessibility
  describe('Interactive diagram of the Scratch editor showing six main regions: Stage, Sprite Pane, Blocks Palette, Code Area, Tabs, and Toolbar. Hover over regions to see descriptions. Click to highlight and see details in the side panel.');

  // Create controls
  createControls();
}

function createControls() {
  // Row 1: Show Labels checkbox
  showLabelsCheckbox = createCheckbox('Show Labels', true);
  showLabelsCheckbox.position(margin, drawHeight + 12);
  showLabelsCheckbox.changed(() => showLabels = showLabelsCheckbox.checked());

  // Show Connections checkbox
  showConnectionsCheckbox = createCheckbox('Show Connections', true);
  showConnectionsCheckbox.position(margin + 130, drawHeight + 12);
  showConnectionsCheckbox.changed(() => showConnections = showConnectionsCheckbox.checked());

  // Reset button
  resetButton = createButton('Reset Highlights');
  resetButton.position(margin + 310, drawHeight + 12);
  resetButton.mousePressed(() => {
    clickedRegion = null;
  });
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

  // Draw connections first (behind regions)
  if (showConnections) {
    drawConnections();
  }

  // Draw each region
  for (let region of regions) {
    drawRegion(region);
  }

  // Draw title
  fill('black');
  noStroke();
  textSize(20);
  textAlign(CENTER, TOP);
  text('Scratch Editor Overview', canvasWidth / 2, 8);

  // Draw side panel for clicked region
  if (clickedRegion) {
    drawSidePanel(clickedRegion);
  }

  // Draw control labels
  drawControlLabels();
}

function drawRegion(region) {
  const isHovered = hoveredRegion === region.id;
  const isClicked = clickedRegion === region.id;

  // Region background
  fill(region.color);
  stroke(isClicked ? '#ff9800' : (isHovered ? '#666' : region.borderColor));
  strokeWeight(isClicked ? 3 : (isHovered ? 2 : 1));
  rect(region.x, region.y, region.w, region.h, 4);

  // Region label
  if (showLabels) {
    fill('black');
    noStroke();
    textSize(11);
    textAlign(LEFT, TOP);
    text(region.label, region.x + 5, region.y + 5);
  }

  // Highlight on hover/click
  if (isHovered || isClicked) {
    noFill();
    stroke('#ff9800');
    strokeWeight(2);
    rect(region.x, region.y, region.w, region.h, 4);
  }
}

function drawConnections() {
  stroke('#ff9800');
  strokeWeight(2);
  noFill();

  for (let conn of connections) {
    const from = regions.find(r => r.id === conn.from);
    const to = regions.find(r => r.id === conn.to);
    if (!from || !to) continue;

    // Calculate connection points
    const fx = from.x + from.w / 2;
    const fy = from.y + from.h / 2;
    const tx = to.x + to.w / 2;
    const ty = to.y + to.h / 2;

    // Draw curved arrow
    drawArrow(fx, fy, tx, ty);

    // Label
    if (showLabels) {
      fill('#ff9800');
      noStroke();
      textSize(10);
      textAlign(CENTER, CENTER);
      text(conn.label, (fx + tx) / 2, (fy + ty) / 2 - 10);
    }
  }
}

function drawArrow(x1, y1, x2, y2) {
  // Draw line
  line(x1, y1, x2, y2);

  // Arrowhead
  const angle = atan2(y2 - y1, x2 - x1);
  const headLen = 12;
  push();
  translate(x2, y2);
  rotate(angle);
  triangle(0, 0, -headLen, -headLen/2, -headLen, headLen/2);
  pop();
}

function drawSidePanel(region) {
  const panelX = 10;
  const panelY = 50;
  const panelW = 180;
  const panelH = 200;

  // Panel background
  fill(255, 255, 255, 240);
  stroke('#ff9800');
  strokeWeight(2);
  rect(region.x + region.w + 10, region.y, panelW, panelH, 10);

  // Content
  fill('black');
  noStroke();
  textSize(14);
  textAlign(LEFT, TOP);
  text(region.name, region.x + region.w + 20, region.y + 15);

  textSize(12);
  let descY = region.y + 35;
  const lines = wrapText(region.desc, panelW - 20);
  for (let line of lines) {
    text(line, region.x + region.w + 20, descY);
    descY += 18;
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
  // Single hint line inside the drawing area, near its bottom edge
  fill('#666');
  noStroke();
  textSize(11);
  textAlign(CENTER, BOTTOM);
  text('Hover over a region for details; click to pin its description.', canvasWidth / 2, drawHeight - 10);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
    // Reposition controls
    if (typeof showLabelsCheckbox !== 'undefined') {
      showLabelsCheckbox.position(margin, drawHeight + 12);
      showConnectionsCheckbox.position(margin + 130, drawHeight + 12);
      resetButton.position(margin + 310, drawHeight + 12);
    }
  }
}

// Handle mouse hover
function mouseMoved() {
  // Check if mouse is over a region
  let found = false;
  for (let region of regions) {
    if (mouseX >= region.x && mouseX <= region.x + region.w &&
        mouseY >= region.y && mouseY <= region.y + region.h) {
      hoveredRegion = region.id;
      found = true;
      break;
    }
  }
  if (!found) {
    hoveredRegion = null;
  }
}

function mouseClicked() {
  // Check if clicking on a region
  for (let region of regions) {
    if (mouseX >= region.x && mouseX <= region.x + region.w &&
        mouseY >= region.y && mouseY <= region.y + region.h) {
      clickedRegion = (clickedRegion === region.id) ? null : region.id;
      break;
    }
  }
}