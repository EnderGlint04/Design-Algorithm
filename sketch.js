var rect1, rect2;
var fixed,moving;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(200, 100, 50, 50);
  rect1.shapeColor = "red";
  rect1.debug = true;

  rect2 = createSprite(200, 300, 50, 50);
  rect2.shapeColor = "blue";
  rect2.debug = true;

  fixed = createSprite(400, 100, 50, 50);
  fixed.shapeColor = "green";
  fixed.debug = true;

  moving = createSprite(400, 300, 50, 50);
  moving.shapeColor = "orange";
  moving.debug = true;

  rect1.velocityY = 5;
  rect2.velocityY = -5;
}

function draw() {
  background(0);
  
  if(rect2.x - rect1.x < rect1.width/2 + rect2.width/2 &&
    rect1.x - rect2.x < rect1.width/2 + rect2.width/2){
      rect1.velocityX = -1*rect1.velocityX;
      rect2.velocityX = -1*rect2.velocityX;
    }
    if(rect2.y - rect1.y < rect1.height/2 + rect2.height/2 &&
    rect1.y - rect2.y < rect1.height/2 + rect2.height/2){
      rect1.velocityY = -1*rect1.velocityY;
      rect2.velocityY = -1*rect2.velocityY;
  }

moving.x = mouseX;
moving.y = mouseY;

if(moving.x -  fixed.x <  fixed.width/2 + moving.width/2 &&
 fixed.x - moving.x <  fixed.width/2 + moving.width/2 &&
 moving.y -  fixed.y <  fixed.height/2 + moving.height/2 &&
  fixed.y - moving.y <  fixed.height/2 + moving.height/2){
    fixed.shapeColor = "yellow";
    moving.shapeColor = "purple";
  }
  else{
    fixed.shapeColor = "orange";
    moving.shapeColor = "green";
  }
  drawSprites();
}