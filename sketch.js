
var hero;
var option1, option2, option3;
var coin, diamond, diamond2, fireball, waterball;
var robot1, robot2, robot3, spaceship, spaceship2,trophy;
var x1, x2, x3;
gameState = 0;
var hero;
function preload()
{
   option1 = loadImage("images/option1.png");
   option2 = loadImage("images/option2.png");
   option3 = loadImage("images/option3.png");

   coin = loadImage("images/coin.png");
   diamond = loadImage("images/diamond.png");
   diamond2 = loadImage("images/diamond2.png");
   fireball = loadImage("images/fireball.png");
   waterball = loadImage("images/waterball.png");

   robot1 = loadImage("images/robot1.png");
   robot2 = loadImage("images/robot2.png");
   robot3 = loadImage("images/robot3.png");

   spaceship = loadImage("images/spaceship.png");
   spaceship2 = loadImage("images/spaceship2.png");

   trophy = loadImage("images/trophy.png");

}
function setup() 
{
  createCanvas(1000,1000);
  //hero = createSprite(500,10,20,20);
  x1 = createSprite(200,500,20,20);
  x1.addImage(option1);
  x1.visible = false;

  x2 = createSprite(500,500,20,20);
  x2.addImage(option2);
  x2.visible = false;

  x3 = createSprite(800,500,20,20);
  x3.addImage(option3);
  x3.visible = false;

  
}

function draw() 
{
  background(0); 
   
  drawSprites();

  if(gameState === 0)
  {
    x1.visible = true;
    x2.visible = true;
    x3.visible = true;
    if(mousePressedOver(x1))
    {
      hero = x1;
      console.log("hello");
      x2.destroy();
      x3.destroy();
      gameState= 1;
    }
    else if(mousePressedOver(x2))
    {
      hero = x2;
      console.log("hello");
      x1.destroy();
      x3.destroy();
      gameState= 1;
    }
    else if(mousePressedOver(x3))
    {
      hero = x3;
      console.log("hello");
      x1.destroy();
      x2.destroy();
      gameState= 1;
    }
  }
  if(gameState ===1)
  {
     hero.x =500;
     hero.y = 50;
     hero.scale = 0.3;
     spawnObstacles1();
    
  }
  
}
function spawnObstacles1()
{
  if(frameCount%80===0){
   var obstacle1 = createSprite();


  }
}