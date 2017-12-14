var b = [];
function setup() {
  createCanvas(500, 500);

  for(var i = 0; i < 10; i++) {
    b.push(new Bob(i * 25 + 50));
  }
}

function draw() {
  background(51);
  translate(width/2, 0);

  for(var i = 0; i < b.length; i++) {
    b[i].update();
    b[i].display();
  }
}

class Bob {
  constructor(lenlen) {
    this.len = lenlen;
    this.m = 1;
    this.a = .5;
    this.freq = sqrt(this.len);

    this.pos = new p5.Vector();
  }


  update() {
    this.a = this.freq * sin(frameCount * -.1) * .08;

    this.pos.set(this.len * sin(this.a), this.len * cos(this.a));
  }

  display() {
    line(0, 0, this.pos.x, this.pos.y);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
