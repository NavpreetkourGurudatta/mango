
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var body1
var ground1
function preload()
{

}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new ground(600,400,1200,20);
body1 = new boy(560,360,120,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ground1.display();
 body1.display();
 drawSprites();
}



