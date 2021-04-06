const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop
function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;  
    
}

function draw(){
    Engine.update(engine);
    background("black")
    console.log(lol)
}   

function drop () {
 
var maxDrops=100;

for (var i=0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,400), random(0,400)));
    console.log(hii)
}
}