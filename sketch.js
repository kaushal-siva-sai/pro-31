const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var engine , world;
//var divisions , ground , plinkos , particles;

function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background("white");  

  Engine.update(engine);

 for(k = 0;k<=width;k = k+80){
   divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight));
 }
 for(var j = 40;j<=width;j=j+50){
   plinkos.push(new Plinko(j,75));
 }
 for(var j = 15;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175));
}
 for(var j=0; j<particles.length;j++){
  particles[j].display();
 }
 for(var k=0; k<divisions.length;k++){
  divisions[k].display();
 }
 if(frameCount%60===0){
   particles.push(new Particle(random(width/2-10,width/2+10), 10,10));
 }
  drawSprites();
}