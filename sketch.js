
var trex ,trex_running;

function preload(){
  trex_running = loadAnimation( "trex1.png" , "trex3.png" , "trex4.png");
  

}

function setup(){
  createCanvas(600,200)
 
  trex = createSprite(50,160,20,50)
 
  trex.addAnimation("running",trex_running)
 
  //crear sprite de Trex
 
}

function draw(){
  background("white")

  drawSprite();
  

}
