var soldier, soldierImg;
var backgroundImg ;
var flagImg;
var snake, snakeImg;
var stone, stoneImg;
var gameover, gameoverImg;
var orange, orangeImg;

function preload(){
  
  soldierImg = loadImage("soldier.png");
  backgroundImg = loadImage("bck.png");
  snakeImg = loadImage("snake.png");
  stoneImg = loadImage("stone+2.png")
  flagImg = loadImage("flag.png");
  gameoverImg = loadImage("game over.png");
  orangeImg = loadImage("orange.png");

}

function setup() {
  createCanvas(1520, 740);

 
  
  //create a soldier sprite
  soldier = createSprite(50,490,20,50);
 soldier.addImage("soldier", soldierImg );
  
  //adding scale and position to soldier
  soldier.scale = 0.2;


  flag = createSprite(1350, 200, 50, 80);
  flag.addImage("flag", flagImg);
  flag.scale = 0.6;


}

function draw() {
  background(backgroundImg);

  if(keyDown("right_arrow")){
    soldier.velocityX = 4;
  }

  if(keyDown("left_arrow")){
    soldier.velocityX = -4;
  }
   
   
  
  drawSprites();
}



