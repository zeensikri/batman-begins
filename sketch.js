const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var canvas; 
var engine, world;
var umbrella;
var thunder, thunder1,thunder2,thunder3,thunder4;
var particles = [];
var rand;
var rains;
var thunderCreatedFrame;
var bg

function preload(){
  thunder1 = loadImage("thunderbolt/1.png");
  thunder2 = loadImage("thunderbolt/2.png");
  thunder3 = loadImage("thunderbolt/3.png");
  thunder4 = loadImage("thunderbolt/4.png");
  
  bg = loadImage("bg.jfif");

}

function setup(){
canvas = createCanvas(400, 800)   

  engine = Engine.create();
  world = engine.world; 

  umbrella = new Umbrella(195, 600, 50);
}

function draw(){
  background(bg)
    Engine.update(engine);
    
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    if (frameCount%1===0){
      particles.push(new Drop(random(0, 400), 4,3));
    }
    
    for(var j = 0; j< particles.length; j++){
     particles[j].display();
      
    }
    drawSprites();
}   

