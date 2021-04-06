const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var drops;
var thunderImg;
function preload(){
    thunderImg = loadImage("1.png");
    
}

function setup(){
   createCanvas(1000, 500);
   engine = Engine.create();
   world = engine.world;
   drops = [];
   var maxDrops=100;
   for(var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(1,1000),random(-50,450) ,PI/1, random(1, 10)));}}

function draw(){
    background("BLACK");
    spawnThunder();
    //image(thunderImg,300, -20, 190, 210 );
    var maxDrops=100;
    for(var i = 0; i<maxDrops; i++){ 
        drops[i].display(); 
        // if(drops[i].body.position.y>500){
        //     Matter.Body.setPosition(drops[i].body, {x:random(1,1000),y:random(-100, 450)});
        // }
        var rand= Math.round(random(1,4))
    console.log(rand);
    thunderImg = loadImage("1.png");
    switch(rand){
     case 1: thunderImg = loadImage("1.png");
     break;
     case 2: thunderImg = loadImage("2.png");
     break;
     case 3: thunderImg = loadImage("3.png");
     break;
     case 4: thunderImg = loadImage("4.png");
     break;
     default: break;
    }
    console.log(thunderImg);
    if(frameCount%20===0){
        imageMode(CENTER);
        image(thunderImg,400, -20, 190, 210 );
    }
    }
    //posReset();
    
    Engine.run(engine);
    Engine.update(engine);
}   


