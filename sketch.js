var thickness,speed,weight;
var wall,bullet;

function setup() {
  createCanvas(1600,400);

speed= random(223,321);
weight= random(30,52);
thickness= random(22,83);

bullet= createSprite(100,200,50,5);
bullet.velocityX= speed;
bullet.shapeColor = "black";

wall= createSprite(1200,200,thickness,height/2);
wall.shapeColor = "gray";
}

function draw() {
  background("lightBlue");

if(hasCollided(bullet,wall)){
  bullet.velocityX= 0;

  var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10){
  wall.shapeColor= "red";

  stroke("black");
  textSize(20);
  fill("black");
  text("VERY BAD DAMAGE",600,200);
  }
  if(damage<10){
    wall.shapeColor= "green";

    stroke("black");
    textSize(20);
    fill("black");
    text("LOW DAMAGE",600,200);
  }
}
  drawSprites();

  stroke("black");
  textSize(20);
  fill("black");
  text("BULLET DAMAGE: "+Math.round(damage),600,50);
  text("BULLET SPEED: "+Math.round(speed),350,50);
  text("BULLET WEIGHT: "+Math.round(weight),100,50);
  text("WALL THICKNESS: "+Math.round(thickness),1100,50);

  }

function hasCollided(lbullet,lwall){

  bulletRightEdge= lbullet.x + lbullet.width;
  wallLeftEdge= lwall.x;
 
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
} 


// var car,wall;
// var deformation;
// var speed,weight;


// function setup(){
// createCanvas(1600,400)
// speed=random(55,90);
// weight=random(400,1500);

// car=createSprite(50,200,50,50);
// wall=createSprite(1500,200,60, height/2);
// car.velocityX=speed;
// car.shapeColor="white";
// //if(wall.x-car.x < (car.width+wall.width/2)){
// wall.shapeColor=color(80,80,80);    
// }


// function draw(){
// background(0);

// if (wall.x - car.x < (car.width/2+wall.width)/2 )
// {

//         car.velocityX=0;
//         var deformation=0.5 *weight*speed* speed/22509;
//         if(deformation>180){

//         car.shapeColor=color(250,0,0);
//         }

//         if(deformation<180 && deformation>100)
//         {
//         car.shapecolor=color(230,230,0);
//         }
//         if(deformation<100)
//         {
//         car.shapeColor=color(0,255,0);
//         }

// }

// drawSprites();
// }
