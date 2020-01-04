const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
box1=new Box(700,310,70,70);
box2=new Box(930,310,70,70);
box3=new Box(700,240,70,70);
box4=new Box(930,240,70,70);
box5=new Box(815,180,70,70);
   ground1=new Ground(600,380,1200,20); 
   pig1=new Pig(815,330);
   pig2=new Pig(815,220);
   log1=new Log(815,260,300,PI/2);
   log2=new Log(815,200,300,PI/2);
   log3=new Log(720,120,150,PI/4);
   log4=new Log(910,120,150,150);
   bird1=new Bird(400,400);

}

function draw(){
    background("red");
    Engine.update(engine);
  box1.display();
   ground1.display();
   box2.display();
   pig1.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   box5.display();
   log3.display();
   log4.display();
   bird1.display();
}