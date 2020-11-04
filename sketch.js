
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxl, boxm, boxr;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,690,1600,70);
	paper = new Paper(200,200,40);
	bin1= new bin(1200,645,200,20);
	bin2=new bin(1300,605,20,100);
	bin3=new bin(1100,605,20,100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();    
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();

  //console.log(paper.x);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-100});   
	 }
   }


