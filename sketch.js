
function setup() {
  createCanvas(1600,1000);


}



function draw() 
{
 
 if (keyIsDown(RIGHT_ARROW)) {
   background("yellow");
 }
 if (keyIsDown(LEFT_ARROW)) {
   background("orange");
 }
  drawSprites()

}




