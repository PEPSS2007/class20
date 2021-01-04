var fixedrect,movingrect;

function setup(){
  createCanvas(600,600);
  fixedrect=createSprite(300,300,50,70);
  movingrect=createSprite(100,100,70,50);
  
  fixedrect.shapeColor="yellow"
  movingrect.shapeColor="yellow"
}

function draw(){
  background("black");
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 &&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 
    ){
      fixedrect.shapeColor="red"
      movingrect.shapeColor="red" 
    }
    else{
      fixedrect.shapeColor="blue"
      movingrect.shapeColor="blue"
    }
  drawSprites()
}