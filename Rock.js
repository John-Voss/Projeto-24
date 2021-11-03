class Rock {
    constructor(x, y) {
        var options = {
            restitution:0.8,
            friction: 0.9,
            density: 12,
        }
        this.body = Bodies.rectangle(x, y, 50, 70);
        this.width = 50;
        this.height = 70;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var ang = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        rectMode(CENTER);
        strokeWeight(4);
        stroke('black');
        fill('#696969');
        rect(0, 0, this.width, this.height);
        pop();
    }
}