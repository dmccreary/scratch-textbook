// Block Categories Infographic
// CANVAS_HEIGHT: 650

// Canvas dimensions - responsive
let canvasWidth = 400;
let drawHeight = 620;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let sliderLeftMargin = 140;
let defaultTextSize = 16;

// Block categories data (Scratch 3.0)
const categories = [
  { name: 'Motion', color: '#4C97FF', desc: 'Move, turn, glide, go to position', examples: ['move 10 steps', 'turn 15°', 'go to x:0 y:0'] },
  { name: 'Looks', color: '#9966FF', desc: 'Speech bubbles, costumes, size, effects', examples: ['say Hello!', 'switch costume', 'change size by 10'] },
  { name: 'Sound', color: '#FF66CC', desc: 'Play sounds, change tempo, volume', examples: ['play sound pop', 'start sound meow', 'set volume to 50%'] },
  { name: 'Events', color: '#FFD500', desc: 'When green flag clicked, key pressed, broadcasts', examples: ['when flag clicked', 'when key pressed', 'broadcast message'] },
  { name: 'Control', color: '#FF9900', desc: 'Loops, if/else, wait, stop, clones', examples: ['forever', 'repeat 10', 'if then else'] },
  { name: 'Sensing', color: '#00CCCC', desc: 'Touching, distance, key pressed, timer', examples: ['touching mouse?', 'key space?', 'distance to'] },
  { name: 'Operators', color: '#00CC00', desc: 'Math, comparison, boolean logic, random', examples: ['10 + 5', 'pick random 1 to 10', '< > ='] },
  { name: 'Variables', color: '#FF0000', desc: 'Store single values (score, lives, timer)', examples: ['set score to 0', 'change lives by -1'] },
  { name: 'Lists', color: '#CC0000', desc: 'Store multiple values (inventory, high scores)', examples: ['add to list', 'item 1 of list', 'length of list'] },
  { name: 'My Blocks', color: '#FF00FF', desc: 'Custom blocks with parameters', examples: ['define jump (height)', 'run without screen refresh'] }
];

// State
let hoveredCategory = -1;
let expandedCategory = -1;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive infographic showing all 10 Scratch block categories with colors, descriptions, and example blocks. Hover to highlight, click to expand.', LABEL);

  // Controls
  createControls();
}

function createControls() {
  // Reset button
  resetButton = createButton('Collapse All');
  resetButton.position(margin, drawHeight + 10);
  resetButton.mousePressed(() => { expandedCategory = -1; });

  // Search input (simulated)
  searchInput = createInput('');
  searchInput.attribute('placeholder', 'Search categories...');
  searchInput.position(margin + 120, drawHeight + 10);
  searchInput.size(200);
  
  // Expand all button
  expandAllButton = createButton('Expand All');
  expandAllButton.position(margin + 330, drawHeight + 10);
  expandAllButton.mousePressed(() => {
    expandedCategory = -2; // Special value for expand all
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

  // Title
  fill('black');
  noStroke();
  textSize(20);
  textAlign(CENTER, TOP);
  text('Scratch Block Categories', canvasWidth / 2, 15);

  // Subtitle
  textSize(12);
  fill('#666');
  text('10 color-coded categories • Hover to highlight • Click to expand', canvasWidth / 2, 40);

  // Draw each category card
  const cardWidth = 360;
  const cardX = (canvasWidth - cardWidth) / 2;
  let cardY = 60;
  const cardGap = 15;
  const baseCardHeight = 50;
  const expandedHeight = 100;

  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    const isHovered = hoveredCategory === i;
    const isExpanded = expandedCategory === i || expandedCategory === -2;

    const h = isExpanded ? expandedHeight : baseCardHeight;

    // Card background
    fill(cat.color);
    stroke(isExpanded ? '#ff9800' : (isHovered ? '#666' : '#ddd'));
    strokeWeight(isExpanded ? 3 : (isHovered ? 2 : 1));
    rect(cardX, cardY, cardWidth, h, 8);
    noStroke();

    // Color bar indicator
    fill(cat.color);
    noStroke();
    rect(cardX, cardY, 8, h, 8, 0, 0, 8);

    // Category name
    fill('white');
    noStroke();
    textSize(16);
    textAlign(LEFT, TOP);
    text(cat.name, cardX + 20, cardY + 8);

    // Description
    fill('rgba(255,255,255,0.9)');
    textSize(11);
    text(cat.desc, cardX + 20, cardY + 30);

    // Examples (only when expanded)
    if (isExpanded) {
      textSize(11);
      textAlign(LEFT, TOP);
      fill('white');
      let exY = cardY + 55;
      for (let ex of cat.examples) {
        text('• ' + ex, cardX + 20, exY);
        exY += 14;
      }
      
      // Collapse hint
      fill('rgba(255,255,255,0.7)');
      textSize(10);
      textAlign(CENTER, CENTER);
      text('Click again to collapse', cardX + cardWidth/2, cardY + h - 15);
    } else {
      // Expand hint
      fill('rgba(255,255,255,0.5)');
      textSize(10);
      textAlign(RIGHT, TOP);
      text('Click to expand →', cardX + cardWidth - 10, cardY + 8);
    }

    cardY += h + cardGap;
  }

  // Control area
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // Instructions
  fill('#666');
  noStroke();
  textSize(12);
  textAlign(LEFT, TOP);
  text('Hover a category to highlight. Click to expand/collapse. "Expand All" shows all details.', margin, drawHeight + 10);
  text('Categories are color-coded to match Scratch\'s actual editor colors.', margin, drawHeight + 25);
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
  // Check hover
  const cardWidth = 360;
  const cardX = (canvasWidth - cardWidth) / 2;
  let cardY = 60;
  const baseCardHeight = 50;
  const cardGap = 15;
  
  let found = false;
  for (let i = 0; i < categories.length; i++) {
    const h = (expandedCategory === i || expandedCategory === -2) ? 100 : 50;
    if (mouseX >= cardX && mouseX <= cardX + 360 &&
        mouseY >= cardY && mouseY <= cardY + h) {
      hoveredCategory = i;
      found = true;
      break;
    }
    cardY += h + 15;
  }
  if (!found) hoveredCategory = -1;
}

function mouseClicked() {
  const cardWidth = 360;
  const cardX = (canvasWidth - cardWidth) / 2;
  let cardY = 60;
  const baseCardHeight = 50;
  const cardGap = 15;
  
  for (let i = 0; i < categories.length; i++) {
    const h = (expandedCategory === i || expandedCategory === -2) ? 100 : 50;
    if (mouseX >= cardX && mouseX <= cardX + 360 &&
        mouseY >= cardY && mouseY <= cardY + h) {
      expandedCategory = (expandedCategory === i) ? -1 : i;
      break;
    }
    cardY += h + 15;
  }
}