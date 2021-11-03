const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var hammer;
var iron;
var plastic;
var rock;
var ground;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var options = {
        isStatic: true
    };
    ground = Bodies.rectangle(600, 590, 1200, 10, options);
    World.add(world, ground);

    hammer = new Hammer(600, 300);
    plastic = new Plastic(1000, 550);
    iron = new Iron(600, 550);
    rock = new Rock(200, 550);
}

function draw(){
    background("#008B8B");
    Engine.update(engine);

    push();
    rectMode(CENTER);
    strokeWeight(4);
    stroke('black');
    fill('#808000');
    rect(ground.position.x, ground.position.y, 1200, 10);
    pop();

    hammer.display();
    plastic.display();
    iron.display();
    rock.display();
}