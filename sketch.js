var box ; 
var wall1, wall2, wall3 ; 
function setup() {
  createCanvas(800,800);

  box = createSprite(300, 400, 20, 20)
  box.shapeColor = "pink"
  wall1 = createSprite (200, 350, 10, 150)
  wall2 = createSprite (400, 350, 10, 150)
  wall3 = createSprite (300, 250, 150, 10)
}

function draw() 
{
  background("yellow");
 if (keyIsDown(RIGHT_ARROW)) {
   box.position.x = box.position.x + 7 
 }

 if (keyIsDown(LEFT_ARROW)) {
   box.position.x = box.position.x - 7
 }

 if (keyIsDown(UP_ARROW)) {
   box.position.y = box.position.y + 5
 }

 if (keyIsDown(DOWN_ARROW)) {
   box.position.y = box.position.y - 5
 }
 box.bounceOff (wall1) 
 box.bounceOff (wall2)
 box.bounceOff (wall3)
  drawSprites()

}




