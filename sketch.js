const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var slingObj;
var polygonImg;
var groundObj;
var ball;
var platF1, platF2;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;

var block17, block18, block19, block20, block21;
var block22, block23, block24;
var block25;

function preload(){
    polygonImg=loadImage("polygon.png");
}

function setup(){
	createCanvas(900,400);
    engine = Engine.create();
	world = engine.world;

    //level1 - platF1
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
    //level2
    block8= new Block(330,235,30,40)
    block9= new Block(360,235,30,40)
    block10= new Block(390,235,30,40)
    block11= new Block(420,235,30,40)
    block12= new Block(450,235,30,40)
    //level3
   block13= new Block(360,195,30,40);
   block14= new Block(390,195,30,40);
   block15= new Block(420,195,30,40);
   //level4
   block16= new Block(390,165,30,40)
   //level1 - platF2
   block17= new Block(640,175,30,40)
    block18= new Block(670,175,30,40)
    block19= new Block(700,175,30,40)
    block20= new Block(730,175,30,40)
    block21= new Block(760,175,30,40)
    //level2
    block22= new Block(670,135,30,40);
   block23= new Block(700,135,30,40);
   block24= new Block(730,135,30,40);
   //level3
   block25= new Block(700,100,30,40)

    groundObj=new Ground(width/2,390,width,20);
    platF1= new Ground(390,300,250,10)
    platF2= new Ground(700,200,200,10)


    ball = Bodies.circle(50,100,20);
    World.add(world,ball);

    slingObj=new Sling(this.ball,{x:100,y:200});
    
	Engine.run(engine);
}

function draw(){
    background(255,255,255);
    fill(0,0,0)
    textSize(20)
   text("Drag the hexagonal stone and release it to launch it towards the blocks!", 10,40)

   fill(0,0,0)
    textSize(20)
   text("Press space to get a second chance!", 10,60)

slingObj.display();
groundObj.display();
platF1.display();
platF2.display();

//level1 - platF1
fill( 57, 0, 153);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
//level2
fill(158, 0, 89)
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
//level3
fill(255, 0, 84)
block13.display();
block14.display();
block15.display();
//level4
fill(255, 84, 0)
block16.display();

//level1 - platF2
fill(97, 242, 194)
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
//level2
fill(145, 242, 145)
block22.display();
block23.display();
block24.display();
//level3
fill(194, 242, 97)
block25.display();

imageMode(CENTER)
tint(0,0,0)
image(polygonImg ,ball.position.x,ball.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
    
}

function mouseReleased(){
    slingObj.fly();
}


function keyPressed(){
    if(keyCode===32){
        slingObj.attach(this.ball)
    }
}

