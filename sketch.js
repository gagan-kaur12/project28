
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var launcher,world;
var launchingForce = 100;
var ground, tree,boy,boyImg,stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango6;

function preload()
{
boy = loadImage("images/boy.png");	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 //boy = createSprite(180,520,30,70);
 //boy.addImage(boyImg);
 //boy.scale = 0.2;
 stone = new Stone(235,420,30);
mango1 = new Mango(1000,260,30);
mango2 = new Mango(1040,200,30);
mango3 = new Mango(1160,160,30);
mango4 = new Mango(1120,100,30);
mango5 = new Mango(980,165,30);
mango6 = new Mango(1230,185,30);
mango7 = new Mango(1180,165,30);

ground = new Ground(width/2,600,width,20)
 tree = new Tree(1100,330,480,650);

launcher = new Launcher(stone.body,{x:235,y:420})


Engine.run(engine);
// Render.run(render);
}
	

function draw() {
 // rectMode(CENTER);
  background("230");
  textSize(25);
  strokeWeight(3)
  stroke("red");
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  launcher.display();

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  detectollision(stone, mango6);
  detectollision(stone, mango7);
  
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
	launcher.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:430}) 
	  launcher.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
    /*var collision = Matter.SAT.collides(lstone,lmango);
    if(collision.collided){
      console.log("collided");
      Matter.Body.setStatic(lmango,false);	
    }*/
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    //console.log(distance)
   // console.log(lmango.r+lstone.r)
      if(distance<=lmango.r+lstone.r)
      {
        //console.log(distance);
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }
