// Motion Blocks Visual Guide - Infographic
// CANVAS_HEIGHT: 600

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 560;
let controlHeight = 90;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let defaultTextSize = 16;

// Motion blocks data
const motionBlocks = [
  { name: 'move (10) steps', desc: 'Moves sprite forward in current direction', params: ['steps'], cat: 'basic' },
  { name: 'turn cw (15) degrees', desc: 'Turns clockwise (right)', params: ['degrees'], cat: 'basic' },
  { name: 'turn ccw (15) degrees', desc: 'Turns counter-clockwise (left)', params: ['degrees'], cat: 'basic' },
  { name: 'go to x: (0) y: (0)', desc: 'Teleports to exact coordinates', params: ['x', 'y'], cat: 'position' },
  { name: 'go to (mouse-pointer v)', desc: 'Teleports to mouse or another sprite', params: ['target'], cat: 'position' },
  { name: 'glide (1) secs to x: (0) y: (0)', desc: 'Smoothly slides to position', params: ['secs', 'x', 'y'], cat: 'position' },
  { name: 'point in direction (90 v)', desc: 'Sets facing direction (0=up, 90=right)', params: ['direction'], cat: 'direction' },
  { name: 'point towards (mouse-pointer v)', desc: 'Faces mouse or another sprite', params: ['target'], cat: 'direction' },
  { name: 'change x by (10)', desc: 'Moves horizontally', params: ['amount'], cat: 'change' },
  { name: 'set x to (0)', desc: 'Sets exact horizontal position', params: ['x'], cat: 'change' },
  { name: 'change y by (10)', desc: 'Moves vertically', params: ['amount'], cat: 'change' },
  { name: 'set y to (0)', desc: 'Sets exact vertical position', params: ['y'], cat: 'change' },
  { name: 'x position', desc: 'Reporter: current X coordinate (-240 to 240)', params: [], cat: 'reporter' },
  { name: 'y position', desc: 'Reporter: current Y coordinate (-180 to 180)', params: [], cat: 'reporter' },
  { name: 'direction', desc: 'Reporter: current facing angle (0-360)', params: [], cat: 'reporter' }
];

// State
let filterCategory = 'all';
let searchQuery = '';
let catBtns = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Visual reference for all Scratch Motion blocks with categories (basic, position, direction, change, reporter) and parameter descriptions.');

  createControls();
}

function createControls() {
  // Row 1: category filter buttons (offsets sized for styled button widths)
  const categories = ['all', 'basic', 'position', 'direction', 'change', 'reporter'];
  const offsets = [0, 60, 135, 233, 339, 422];
  catBtns = [];
  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    const btn = createButton(cat.charAt(0).toUpperCase() + cat.slice(1));
    btn.position(margin + offsets[i], drawHeight + 12);
    btn.mousePressed(() => { selectCategory(cat); });
    catBtns.push({ cat: cat, btn: btn });
  }
  selectCategory('all');

  // Row 2: search input
  searchInput = createInput('');
  searchInput.attribute('placeholder', 'Search blocks...');
  searchInput.position(margin, drawHeight + 50);
  searchInput.size(200);
  searchInput.input(() => { searchQuery = searchInput.value().toLowerCase(); });
}

function selectCategory(cat) {
  filterCategory = cat;
  for (let entry of catBtns) {
    entry.btn.style('background', entry.cat === cat ? '#ffd9a0' : '');
  }
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
  textSize(18);
  textAlign(CENTER, TOP);
  text('Motion Blocks Reference', canvasWidth / 2, 10);

  // Subtitle
  textSize(11);
  fill('#666');
  text('Click a category to filter. Search by block name or description.', canvasWidth / 2, 32);

  // Filter and draw blocks
  let filtered = motionBlocks.filter(b => {
    const matchesCategory = filterCategory === 'all' || b.cat === filterCategory;
    const matchesSearch = b.name.toLowerCase().includes(searchQuery) || b.desc.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  drawBlocks(filtered);

  // Hint line
  drawControlLabels();
}

function drawBlocks(blocks) {
  const cardW = 360;
  const cardX = (canvasWidth - cardW) / 2;
  const cardH = 28;
  const pitch = 33;
  let cardY = 50;

  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];

    // Category color indicator
    let catColor = '#888';
    if (b.cat === 'basic') catColor = '#4C97FF';
    else if (b.cat === 'position') catColor = '#2ECC71';
    else if (b.cat === 'direction') catColor = '#9B59B6';
    else if (b.cat === 'change') catColor = '#E67E22';
    else if (b.cat === 'reporter') catColor = '#888';

    // Card
    fill('white');
    stroke(catColor);
    strokeWeight(1);
    rect(cardX, cardY, cardW, cardH, 4);
    noStroke();

    // Category color bar
    fill(catColor);
    rect(cardX, cardY, 6, cardH, 4, 0, 0, 4);

    // Block name
    fill('black');
    noStroke();
    textSize(12);
    textAlign(LEFT, CENTER);
    text(b.name, cardX + 14, cardY + cardH / 2);

    // Parameters
    if (b.params.length > 0) {
      fill('#666');
      textSize(10);
      text('Params: ' + b.params.join(', '), cardX + 205, cardY + cardH / 2);
    }

    // Category label
    fill(catColor);
    textSize(10);
    textAlign(RIGHT, CENTER);
    text(b.cat.toUpperCase(), cardX + cardW - 8, cardY + cardH / 2);

    cardY += pitch;
  }
}

function drawControlLabels() {
  // Single hint line inside the drawing area, near its bottom edge
  fill('#666');
  noStroke();
  textSize(11);
  textAlign(CENTER, BOTTOM);
  text('Filter with the category buttons, or search by block name or description.', canvasWidth / 2, drawHeight - 6);
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