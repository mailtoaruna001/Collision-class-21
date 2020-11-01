function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 movingRect = createSprite(400,200,50,50);
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX ; 
  movingRect.y=mouseY ;
  if(isTouching(movingRect , fixedRect)){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow"; 
  
  }
  else{
    movingRect.shapeColor="lightblue";
    fixedRect.shapeColor="lightblue";
  }
  drawSprites();
}

