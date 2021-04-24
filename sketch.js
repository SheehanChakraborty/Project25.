
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(900,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200,height,1200,20);
	paper = new Paper(20, 20);
	dustbin = new Dustbin(650, 650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  ground.display();
  paper.display();
  dustbin.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {                              
	  Matter.Body.applyForce(paper.body, paper.body.position, {x: 85,y: -85});
	}
}