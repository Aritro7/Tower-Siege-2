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
  stand1 = new Stand(400,350,250,10);
  stand2 = new Stand(670,250,250,10);
 
  //level one
  block1 = new Block(300,305,30,40);
  console.log(block1);
  block2 = new Block(330,295,30,40);
  block3 = new Block(360,295,30,40);
  block4 = new Block(390,295,30,40);
  block5 = new Block(420,295,30,40);
  block6 = new Block(450,295,30,40);
  block7 = new Block(480,295,30,40);
  //level two
  block8 = new Block(330,265,30,40);
  block9 = new Block(360,265,30,40);
  block10 = new Block(390,265,30,40);
  block11 = new Block(420,265,30,40);
  block12 = new Block(450,265,30,40);
  //level three
  block13 = new Block(360,235,30,40);
  block14 = new Block(390,235,30,40);
  block15 = new Block(420,235,30,40);
  //top
  block16 = new Block(390,205,30,40);

  //Second block tower
  block17=new Block(580,225,30,40)
  block18=new Block(610,225,30,40)
  block19=new Block(640,225,30,40)
  block20=new Block(670,225,30,40)
  block21=new Block(700,225,30,40)
  block22=new Block(730,225,30,40);
  block23=new Block(760,225,30,40);

  block24=new Block(610,195,30,40)
  block25=new Block(640,195,30,40)
  block26=new Block(670,195,30,40)
  block27=new Block(700,195,30,40)
  block28=new Block(730,195,30,40)

  block29=new Block(640,165,30,40)
  block30=new Block(670,165,30,40)
  block31=new Block(700,165,30,40)

  block32=new Block(670,135,30,40)

  ball=Bodies.circle(50,200,20)
  World.add(world,ball)

  slingShot=new Slingshot(ball,{x:150,y:150})
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
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
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  //level 1
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();

  //level 2
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  //level 3
  block29.display();
  block30.display();
  block31.display();

  //top
  block32.display();

  slingShot.display();
 
  fill("gold")
  imageMode(CENTER)
  image(polygon_img,ball.position.x,ball.position.y,40,40)
 

}

function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(ball)
}
  
}
