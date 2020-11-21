var Rect1, Rect2
function setup() {
  createCanvas(1200,800);
  Rect1=createSprite(600, 400, 50, 80);
  Rect1.shapeColor="blue";
  Rect2=createSprite(400,200,80,30);
  Rect2.shapeColor="blue"
}

function draw() {
  background(255,255,255); 
  Rect2.x=World.mouseX;
  Rect2.y=World.mouseY; 
  if(Rect2.x-Rect1.x<Rect2.width/2+Rect1.width/2&& 
    Rect1.x-Rect2.x<Rect2.width/2+Rect1.width/2&&
    Rect2.y-Rect1.y<Rect2.height/2+Rect1.height/2&&
    Rect1.y-Rect2.y<Rect2.height/2+Rect1.height/2){
      Rect1.shapeColor="pink";
      Rect2.shapeColor="pink";
    }
else{
  Rect1.shapeColor="blue";
  Rect2.shapeColor="blue";
}
  drawSprites();
}