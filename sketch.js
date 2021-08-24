
var runner, running, edges;
var pathImage;

function preload(){
  running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");
  coinsImg=loadImage("coin.png");
  bombImg=loadImage("bomb.png");
  energy_drinkImg=loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,700);
  
 
  
  edges = createEdgeSprites();
  
  
  path=createSprite(200,200,400,10);
  path.addImage(pathImage);
  
  invisibleboundary1 = createSprite(10,600,10,2900)
  invisibleboundary1.visible=false
  invisibleboundary2 = createSprite(395,600,10,2900)
  invisibleboundary2.visible=false
  runner = createSprite(450,300,20,50);
  runner.addAnimation("running",running); 
  runner.scale = 0.1;
  path.scale=1.5;
  
  
}


function draw(){
  //set background color 
  background("0");
  path.velocityY=-3
  if(path.y<400){
   path.y=path.height/2
  }
  
  runner.collide(invisibleboundary1)
  runner.collide(invisibleboundary2)
  console.log(runner.x)
  runner.x=World.mouseX;
  drawSprites();
}
