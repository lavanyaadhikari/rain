const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rainDrop;
function preload(){
    
}

function setup(){
   createCanvas(windowWidth, windowHeight);
   engine = Engine.create();
   world = engine.world;

   var maxDrops = 100;
   for(var i=0;i<maxDrops;i++){
   rainDrop.push(new createDrop(random(1,1000), random(0,400)));
   }
    
}

function draw(){
    Engine.update(engine);
    background("black");
    rainDrop.display();
}   

