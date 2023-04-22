var player;
var gI, g1, g2, g3, g4, g5, g6,g7 ,g8 ,g9 ,g10, g11, g12, g13, g14, g15;

var Mortes = 0;
var TeveSorte = 0;

function preload(){

}

function setup() {
  createCanvas(1000, 605);

  
  player = createSprite(75,560,40,40);
  player.scale = 1.5

  var ground_options = {
    isStatic : true
  }
  push();
  gI = createSprite(495,605,980,10,ground_options);
  gI.shapeColor = "#0ff0fc";

  g1 = createSprite(10,350,10,580,ground_options);
  g1.shapeColor = "#0ff0fc";
    g2 = createSprite(980,350,10,580,ground_options);
    g2.shapeColor = "#0ff0fc";
  g3 = createSprite(495,60,980,10,ground_options);
  g3.shapeColor = "#0ff0fc";
    g4 = createSprite(140,380,10,480,ground_options);
    g4.shapeColor = "#0ff0fc";
  g5 = createSprite(270,380,10,480,ground_options);
  g5.shapeColor = "#0ff0fc";
    g6 = createSprite(575,165,600,10,ground_options);
    g6.shapeColor = "#0ff0fc";
  g7 = createSprite(675,500,600,10,ground_options);
  g7.shapeColor = "#0ff0fc";
    g8 = createSprite(380,290,10,250,ground_options);
    g8.shapeColor = "#0ff0fc";
  g9 = createSprite(800,290,10,250,ground_options);
  g9.shapeColor = "#0ff0fc";
    g10 = createSprite(480,375,10,250,ground_options);
    g10.shapeColor = "#0ff0fc";
  g11 = createSprite(690,375,10,250,ground_options);
  g11.shapeColor = "#0ff0fc";
    g12 = createSprite(585,290,10,250,ground_options);
    g12.shapeColor = "#0ff0fc";
  pop();

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);

  fill("#ff3131");
  textSize(30);
  text("Mortes: "+Mortes, 50, 45);
 
  fill("#39ff14");
  textSize(30);
  text("Vitorias(TeveSorte): "+TeveSorte, 650, 45);

  if(keyDown("UP_ARROW")||touches.length>0)
  {
    player.y = player.y-15;
  }

  if(keyDown("DOWN_ARROW")||touches.length>0)
  {
    player.y = player.y+15;  
  }

  if(keyDown("RIGHT_ARROW")||touches.length>0)
  {
    player.x = player.x+15;  
    player.mirrorX(1);
  }

  if(keyDown("LEFT_ARROW")||touches.length>0)
  {
    player.x = player.x-15;
    player.mirrorX(-1);
  }

  if(player.collide(g1)){
    Mortes = Mortes +1;
    player.x = 75;
    player.y = 560;
  }
    if(player.collide(g2)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
  if(player.collide(g3)){
    Mortes = Mortes +1;
    player.x = 75;
    player.y = 560;
  }
    if(player.collide(g4)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
  if(player.collide(g5)){
    Mortes = Mortes +1;
    player.x = 75;
    player.y = 560;
  }
    if(player.collide(g6)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
  if(player.collide(g7)){
    Mortes = Mortes +1;
    player.x = 75;
    player.y = 560;
  }
    if(player.collide(g8)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
  if(player.collide(g9)){
    Mortes = Mortes +1;
    player.x = 75;
    player.y = 560;
  }
    if(player.collide(g10)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }
  if(player.collide(g11)){
    Mortes = Mortes +1;
    player.x = 75;
    player.y = 560;
  }
    if(player.collide(g12)){
      Mortes = Mortes +1;
      player.x = 75;
      player.y = 560;
    }

  player.collide(gI)
  drawSprites();
}