const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  stand3 = new Stand(750,150,200,10);
  polygon=Bodies.circle(100,200,30);
  World.add(world,polygon);
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  Block8 = new Block(690,135,30,40);
  Block9 = new Block(710,135,30,40);
  Block10 = new Block(740,135,30,40);
  Block11 = new Block(770,135,30,40);
  Block12 = new Block(800,135,30,40);
  //level three
  Block13 = new Block(710,125,30,40);
  Block14 = new Block(740,125,30,40);
  Block15 = new Block(770,125,30,40);
  //top
  Block16 = new Block(740,100,30,40);

  slingShot=new SlingShot(this.polygon,{x:100,y:150});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand3.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  Block8.display();
  Block9.display();
  Block10.display();
  Block11.display();
  Block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  Block13.display();
  Block14.display();
  Block15.display();
  fill("grey");
  block16.display();
  Block16.display();
imageMode(RADIUS)
image(polygon_img,polygon.position.x,polygon.position.y,30,30);
slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}