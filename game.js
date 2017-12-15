var tileset;
var tileSize;
var tiles = [];

var map1 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

function preload() {
  tileset = loadImage("https://boyadh.github.io/img/simpleTiles.png");
}

function setup() {
  createCanvas(500, 500);
  fill(255);
  background(0);
  noStroke();
  noSmooth();

  tileSize = 32;

  tiles.push(new Tile(tileset.get(0, 0, tileSize, tileSize)));
}

function draw() {
  scale(2);
  var y;
  for(y = 0; y < map.length; y++) {
    var x;
    for(x = 0; x < map.length; x++) {
      var currentTile = map1[y][x];
      tiles[0].display();
    }
  }
}

class Tile {
  constructor(img) {
    this.pos = p5.Vector(0, 0);
    this.sprite = img;
  }

  display() {
    image(this.sprite, this.pos.x, this.pos.y);
  }
}
