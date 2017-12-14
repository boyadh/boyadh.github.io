class Orb {

	constructor(xx, yy) {
    this.pos = new p5.Vector(xx, yy);
    this.vel = new p5.Vector(map(Math.random(), 0, 1, -ra, ra), map(Math.random(), 0, 1, -ra, ra));
    this.acc = new p5.Vector(0, 0);
    this.m = 5;
	}

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.mult(0);
  }

  display() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 16, 16);
  }
}

class Attractor {
  constructor() {
    this.pos = new p5.Vector(250, 250);
    this.m = 40;
  }

  attract(other) {
    var force = other.pos.copy();
    force.sub(this.pos);
    force.setMag((G * this.m * other.m) /  this.pos.dist(other.pos) * -1)

    return force;
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}

var ra = 2.5;
var G = 0.07;
var planet;
var orbs = [];

function setup() {
	createCanvas(500, 500);
	noStroke();
	fill(255);

  frameRate(60);

  planet = new Attractor();
}


function draw() {
  background(0);
  planet.display();
  if(mouseIsPressed) {
    orbs.push(new Orb(mouseX, mouseY));
  }

	for(var i = 0; i < orbs.length; i++) {
    if(orbs[i].pos.dist(planet.pos) > 32) {
      orbs[i].applyForce(planet.attract(orbs[i]));
      orbs[i].update();
    }

    orbs[i].display();
  }


}
