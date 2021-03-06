var hand,handImg,aimImg,b1,b2,b3,b4,e1,e2,e3,enemyImg,bg,score,hp,GameState ="alive",explosion,explosionImg;
function preload(){
handImg = loadImage("hand.png");  
aimImg = loadImage("aim.png");  
enemyImg = loadImage("enemy.png");
bg = loadImage("background.png");
explosionImg = loadImage("explosion.png");  
}
function setup() {
  createCanvas(800, 600)
 
  explosion = createSprite(400,300);
  explosion.addImage(explosionImg);
  explosion.visible = false;
  
  hand = createSprite(400,520);
  hand.addImage(handImg);
  hand.scale = 0.5
 
  aim = createSprite(400,200);
  aim.addImage(aimImg);
  aim.scale = 0.1;
  
  b1 = createSprite(400,400,800,1);
  b1.visible = false
  b1.shapeColor = "black"
  
  b2 = createSprite(400,1,1,600);
  b2.visible = false
  
  b3= createSprite(1,300,1,600);
  b3.visible = false
    
  b4 = createSprite(799,500,800,1);
  b4.visible = false
  
  e1 = createSprite(Math.round(random(50,600)),Math.round(random(50,400)))
  e1.addImage(enemyImg);
  e1.scale = 0.4
  
  e2 = createSprite(Math.round(random(50,600)),Math.round(random(50,400)))
  e2.addImage(enemyImg);
  e2.scale = 0.4
  
  e3 = createSprite(Math.round(random(50,600)),Math.round(random(50,400)))
  e3.addImage(enemyImg);
  e3.scale = 0.4
  
  score = 0;
  hp = 100
}

function draw() {
  background(bg);
  textSize(25);
  fill("white")
  text("Timer:"+hp,580,50)
  text("Score:"+score,50,50)
  
  text("Press space to shoot",200,50);
  text("Press up &  down arrows to aim",200,70);
  text("Use mouse to move the gun",200,90);
    
  if(GameState === "alive"){
  e1.velocityX = 4
  e2.velocityX = 4
  e3.velocityX = 4
  hand.x = mouseX;
  aim.x = mouseX;
    if(aim.isTouching && e1||aim.isTouching && e2||aim.isTouching && e3){
  explosion.x = aim.x;
  explosion.y = aim.y;  
      }
  if(keyDown("down")){
    aim.y = aim.y+10
  }
   if(keyDown("up")){
    aim.y = aim.y-10
       }
    if(keyDown("space")=== false&&aim.isTouching(e1)||aim.isTouching(e2)||aim.isTouching(e3)){
      explosion.visible = false;
    }
  if(e1.isTouching(e2)||e1.isTouching(e3)){
    e1.x = 0
    e1.y = Math.round(random(50,400))
  }
    if(e2.isTouching(e3)||e2.isTouching(e1)){
    e2.x = 0
    e2.y = Math.round(random(50,400))
  }
    if(e3.isTouching(e2)||e3.isTouching(e1)){
    e3.x = 0
    e3.y = Math.round(random(50,400))
  }
  if(e1.isTouching(aim)&&keyDown("space")){
    score = score +1
    e1.x = 0
    explosion.visible = true;
    e1.y = Math.round(random(50,400))
  }
  if(e2.isTouching(aim)&&keyDown("space")){
    score = score +1
    e2.x = 0
    e2.y = Math.round(random(50,400))
    explosion.visible = true;
  }
  if(e3.isTouching(aim)&&keyDown("space")){
    score = score +1
    e3.x = 0
    explosion.visible = true;
    e3.y = Math.round(random(50,400))
  }
  if(e1.x>=800){
    hp = hp-1;
    e1.x = 0
    e1.y = Math.round(random(50,400))
  }
  if(e2.x>=800){
    hp = hp-1;
    e2.x = 0
    e2.y = Math.round(random(50,400))
  }
  if(e3.x>=800){
    hp = hp-1;
    e3.x = 0
    e3.y = Math.round(random(50,400))
  }
  }
  if(hp === 0){
    GameState = "dead";
  }
  if(GameState ==="dead"){
    textSize(35);
    fill("white");
    text("You Lost",400,300);
  }
  
  if(hp<= 80)
  {
    e1.velocityX = 4 + 2;
    e2.velocityX = 4 + 2;
    e3.velocityX = 4 + 2;
  }

  if(hp <= 60)
  {
    e1.velocityX = 4 + 4;
    e2.velocityX = 4 + 4;
    e3.velocityX = 4 + 4;
  }

  if(hp <= 40)
  {
    e1.velocityX = 4 + 6;
    e2.velocityX = 4 + 6;
    e3.velocityX = 4 + 6;
  }

  if(hp <= 20)
  {
    e1.velocityX = 4 + 8;
    e2.velocityX = 4 + 8;
    e3.velocityX = 4 + 8;
  }
  
  aim.collide(b1)
  aim.collide(b2)
  aim.collide(b3)
  aim.collide(b4)
  drawSprites();
}
