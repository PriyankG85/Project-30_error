
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload() {

}

function setup() {
	createCanvas(1280, 860);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Roof = new roof(640, 100, 700);
	bob1 = new bob(360, 700, 260);
	bob2 = new bob(492, 700, 260);
	bob3 = new bob(624, 700, 260);
	bob4 = new bob(756, 700, 260);
	bob5 = new bob(888, 700, 260);

	rope1 = new SlingShot(Roof.body, bob1.body, -275, 0);
	rope2 = new SlingShot(Roof.body, bob2.body, -141, 0);
	rope3 = new SlingShot(Roof.body, bob3.body, -8, 0);
	rope4 = new SlingShot(Roof.body, bob4.body, 125, 0);
	rope5 = new SlingShot(Roof.body, bob5.body, 256, 0);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background('aliceblue');

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	Roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		console.log('apply force')
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-60,y:-60});

	}
}



