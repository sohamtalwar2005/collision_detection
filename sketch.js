//creting the rectangles
var movingRect,fixedRect;

function setup() {
  //creating the canvas
  createCanvas(800,800);
  //creating sprites and setting their colors
  movingRect = createSprite(400, 400, 50, 80);
  movingRect.shapeColor = "red";
  fixedRect = createSprite(450,450,80,30); 
  fixedRect.shapeColor = "red";

}

function draw() {
  //setting the background color to white
  background(255,255,255);  
  //making the rectangle move on the position of the user's mouse
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //creating a condtion for colliding the rectangles
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } 
  //displaying the sprites
   drawSprites();
}