const Bodies  = Matter.Bodies;
const World=Matter.World;
const Engine= Matter.Engine;
const Constraint = Matter.Constraint;

var engine,world;
var box1,ground,box2;
var log1,log2;
var sling;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world= engine.world;

  box1=new Box(330,80,20,20,"yellow")
  box2=new Box(350,80,20,20,"yellow")
  box3=new Box(310,80,20,20,"yellow")
  box4=new Box(370,80,20,20,"yellow")
  box5=new Box(390,80,20,20,"yellow")
  box6=new Box(330,60,20,20,"red")
  box7=new Box(350,60,20,20,"red")
  box8=new Box(310,60,20,20,"red")
  box9=new Box(370,60,20,20,"red")
  box10=new Box(390,60,20,20,"red")
  box11=new Box(330,40,20,20,"yellow")
  box12=new Box(350,40,20,20,"yellow")
  box13=new Box(310,40,20,20,"yellow")
  box14=new Box(370,40,20,20,"yellow")
  box15=new Box(390,40,20,20,"yellow")
  // For log      
  box16=new Box(630,180,20,20,"yellow")
  box17=new Box(650,180,20,20,"yellow")
  box18=new Box(670,180,20,20,"yellow")
  box19=new Box(690,180,20,20,"yellow")
  box20=new Box(610,180,20,20,"yellow")
  box21=new Box(630,160,20,20,"red")
  box22=new Box(650,160,20,20,"red")
  box23=new Box(670,160,20,20,"red")
  box24=new Box(690,160,20,20,"red")
  box25=new Box(610,160,20,20,"red")
  box26=new Box(610,140,20,20,"yellow")
  box27=new Box(630,140,20,20,"yellow")
  box28=new Box(650,140,20,20,"yellow")
  box29=new Box(670,140,20,20,"yellow")
  box30=new Box(690,140,20,20,"yellow")
  box31=new Box(50,50,20,20,"green")
  
  sling = new slingshot(box31.obj,{x:100,y:50});

 log1=new Log(350,100,130,20,"blue")
 log2=new Log(650,200,130,20,"blue")

 
 ground= new Ground();
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  // For log 2
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  log1.display();
  log2.display();
  sling.display();
  ground.display();
  drawSprites();
  
}
function mouseDragged(){

  Matter.Body.setPosition(box31.obj,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){

  sling.fly();

}