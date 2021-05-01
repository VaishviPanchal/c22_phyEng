const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;

var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var groundOption = {
      isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,20,groundOption);
  World.add(myWorld,ground);
  console.log(ground.position.x);

  var option={
     restitution:1,
     friction:0.2 
  }
  ball = Bodies.circle(200,100,15,option)
  World.add(myWorld,ball);
  
}

function draw() {
  background("pink"); 

  Engine.update(myEngine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,15,15)

}