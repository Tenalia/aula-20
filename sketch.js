
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
 var bola_options = {
   restitution: 0.95
  
 }
  bola =  Bodies.circle(200,100,20,bola_options);
  World.add(world, bola);

  var ground_options = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(bola.position.x, bola.position.y, 20);
  rect(ground.position.x, ground.position.y, 400, 20);
  drawSprites();
 
}



