
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  background("white");
  
  monkey = createSprite(50,200,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  

  
}


function draw() {
background("white");
  
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  
  spawnBanana();
  spawnObstace();
  drawSprites();
  
  
  
}

function spawnBanana() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(200,200,20,20);
    banana.velocityX = -6;
    var rand = Math.round(random(1,1));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
  }
}

function spawnObstace() {
  if(frameCount % 100 === 0) {
    var obstace = createSprite(200,330,20,20);
    obstace.velocityX = -6;
    var rand = Math.round(random(1,1));
    obstace.addImage(obstaceImage);
    obstace.scale = 0.1;
  }
}


