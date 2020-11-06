var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxBase, boxLeft, boxRight;
var boxB, boxL, boxR;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,30);
	groundSprite.shapeColor=color(255)

	boxBase = createSprite(400,640,200,20);
	boxBase.shapeColor = "red";

	boxLeft = createSprite(300,600,20,100);
	boxLeft.shapeColor = "red";

	boxRight = createSprite(500,600,20,100);
	boxRight.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic : true
	}

	packageBody = Bodies.circle(width/2 , 200 , 15 , {restitution:0.7,friction:0.1, isStatic:true});
	boxB = Bodies.rectangle(400,640,200,20,options);
	boxL = Bodies.rectangle(300,600,20,100,options);
	boxR = Bodies.rectangle(500,600,20,100,options);

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 30 , {isStatic:true} );
	//World.add(world, ground);
	World.add(world, [ground,packageBody,boxB,boxL,boxR]);


	Engine.run(engine);
  
}


function draw() {
  background("grey");
  rectMode(CENTER);
  fill("white");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //Engine.update(engine);


  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic(packageBody,false);
  }
}



