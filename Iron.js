class Iron{
    constructor(x,y) {
        var options = {
            restitution: 0.8,
            friction: 3,
            desity: 30,
        };
        this.body = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 100;
        this.height = 100;

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
        fill('#FF4500');
        rect(0, 0, this.width, this.height);
        pop();
    }
}