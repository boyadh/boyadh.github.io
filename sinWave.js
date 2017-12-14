class Section {
  constructor(xx, aa) {
    this.a = aa;
    this.pos = new p5.Vector(xx, map(sin(this.a), -1, 1, 24, height - 24), map(cos(this.a), -1, 1, .5, 1));
    this.hOff = map(this.pos.x, 0, width, 0, 256);
  }

  update() {
    this.a = this.a + 1;
    this.pos.y = map(sin(this.a * .08), -1, 1, 24, height - 24);
    this.pos.z = map(cos(this.a * .08), -1, 1, .5, 1);
  }

  display() {
    fill(this.hOff + h, 255, 255);
    ellipse(this.pos.x, this.pos.y, 48 * this.pos.z, 48 * this.pos.z);
  }
}

var h = 0;
var hUp = true;
var sect = [];

function setup() {
  createCanvas(displayWidth, 500);
  noStroke();
  fill(255);
  colorMode(HSB);

  for (var i = 0; i < width / 32; i++) {
    sect.push(new Section(i * 32, 0 + i * 2.6));
  }
}

function draw() {
  background(0);
  for(var i = 0; i < sect.length; i++ ) {
    sect[i].update();
    sect[i].display();
  }

  if(hUp && h > 255) {
    hUp = false;
  } else if (!hUp && h < 0) {
    hUp = true;
  }

  if(hUp) {
    h += 1;
  } else if(!hUp) {
    h -= 1;
  }
}
