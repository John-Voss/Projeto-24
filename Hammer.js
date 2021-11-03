class Hammer {
  constructor(x, y){
    var options = {
      restitution: 1,
      density: 1,
      friction: 1,
    };
    this.body = Bodies.rectangle(x, y, 100, 20, options);
    this.width = 100;
    this.height = 50;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var ang = this.body.angle;

    pos.x = mouseX;
    pos.y = mouseY;

    push();
    translate(pos.x, pos.y);
    rotate(ang);
    rectMode(CENTER);
    strokeWeight(4);
    stroke('black');
    fill('#A0522D');
    rect(0, 0, this.width, this.height);
    pop();
  }
}