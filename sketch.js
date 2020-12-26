
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree,ground,stone,mango1;

function preload()
{
	boyimg=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree = new Tree(500,400);
	ground = new Ground(400,610,800,25);
	stone = new Stone( 80,350,100,100);
	mango1 = new Mango(500,450,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
 stone.display();
 mango1.display();
 imageMode(CENTER);
 image(boyimg,150,400,200,350);
}



