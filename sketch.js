var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect =createSprite(400, 200, 80, 80);
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
}

function draw() {
  background(255,255,255); 
  movingrect.x=mouseX;
  movingrect.y=mouseY ;
  if(movingrect.x-fixedrect.x<(movingrect.width/2+fixedrect.width/2)&&fixedrect.x-movingrect.x<(movingrect.width/2+fixedrect.width/2)&&
  movingrect.y-fixedrect.y<(movingrect.width/2+fixedrect.width/2)&&fixedrect.y-movingrect.y<(movingrect.width/2+fixedrect.width/2)){
   fixedrect.shapeColor="blue";
   movingrect.shapeColor="blue";

  }
  else{
    fixedrect.shapeColor="red"
    movingrect.shapeColor="red"
  }
console.log(movingrect);
  drawSprites();
}
