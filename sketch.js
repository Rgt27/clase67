var bg,bgImg;

var ant, ant_running;
var spider, spider_running;

var food;

var wall1, wall2, wall3, wall4;

var line;

// Prueba de git
// Hola
// Mi nombre es


function preload(){
  ant_running = loadAnimation("hormiga1.png","hormiga2.png","hormiga3.png")
  spider_running = loadAnimation("araña1.png","araña2.png","araña3.png")
}

function setup() {  
  createCanvas(windowWidth,windowHeight);

  ant = createSprite (1100,650,18,18);
  ant.addAnimation("running", ant_running);

  spider = createSprite (1450, 100, 18, 18);
  spider.addAnimation("run", spider_running);

  food = createSprite(200, 200, 25, 25);
  food.shapeColor = "brown";

  line = createSprite (1300, 700, 10, 300 );
  line.shapeColor = "black";

}



function draw() {
 background("green"); 


 



if(keyDown("space")){

  ant.velocityY=5;
}



 drawSprites();
 
}
