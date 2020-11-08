var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
var velocity ;
var weight ;
var deformation;


function setup() {
  createCanvas(800,400);
 car1 =  createSprite(100, 50, 50, 20);
 
 wall1  = createSprite(780,50,20,80);
 
 velocity = random(20,60);
 weight = random(1000,5000);

 deformation = 0.5*weight*velocity*velocity/22500
}

function draw() {
  background("black"); 
  car1.shapeColor = "white";

  car1.velocityX = velocity;

  if( wall1.x - car1.x < wall1.width/2 + car1.width/2 
    && car1.x - wall1.x < wall1.width/2 + car1.width/2){

     car1.velocityX = 0;
     
     textSize(20);
     text("Deformation = " + deformation,270,200);
     text("Velocity = " + velocity,270,230);
     text("Weight = " +  weight,270,260); 

      if(deformation < 100){
        wall1.shapeColor = "green";
        fill("green");
        text("SAFE", 350,320);
      }else if(deformation < 180 && deformation > 100){
        wall1.shapeColor = "yellow";
        fill("yellow");
        text("Damage",350,320);
      }else {
        wall1.shapeColor = "red"; 
        fill("red");
        text("Welcome to HEAVEN (you are dead)",250,320)
      };
    }
  
 
  
  drawSprites();
}

