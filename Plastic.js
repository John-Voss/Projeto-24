class Plastic{
    constructor(x, y) {
        var options = {
            restitution: 0.3,
            friction: 5,
            density: 0.5,
        };
        this.body = Bodies.circle(x, y, 25, options);
        this.r = 10*7;        

        World.add(world, this.body);
    }
    
    display() {
        var pos = this.body.position;
        var ang = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke('black');
        fill('#F8F8FF');
        ellipse(0, 0, this.r);
        pop();
    }
}