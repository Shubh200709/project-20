var tom,jerry;
var tomImage1,tomImage2,tomImage3,jerryImage1,jerryImage2,jerryImage3;
var background,backgroundImage;
function preload() {
    //load the images here
tomImage1=loadAnimation("cat1.png");
tomImage2=loadAnimation("cat2.png","cat3.png");
tomImage3=loadAnimation("cat4.png");

jerryImage1=loadAnimation("mouse1.png");
jerryImage2=loadAnimation("mouse2.png","mouse3.png");
jerryImage3=loadAnimation("mouse4.png");

backgroundImage=loadAnimation("garden.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here
    background=createSprite(windowWidth,windowHeight);
    background.addAnimation(backgroundImage);

    tom=createSprite(windowWidth-300,windowHeight-700,20,20);
    tom.addAnimation(tomImage1);

    jerry=createSprite(windowWidth-700,windowHeight-700,20,20);
    jerry.addAnimation(jerryImage2);

    drawSprites;
}

function draw() {

    background("backgroundImage");
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x<jerry.width/2+tom.width/2 &&
       jerry.x-tom.x<jerry.width/2+tom.width/2){

       tom.changeAnimation(tomImage3); 
       jerry.changeAnimation(jerryImage3);

    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

   if(keyPressed("RIGHT")){
       jerry.addAnimation("mouseteasing",jerryImage2);
       jerry.changeAnimation("mouseteasing",jerryImage2);
       jerry.frameDelay=25;

   }

   if(keyPressed("LEFT")){
       tom.velocityX=tom.velocityX-2;
       tom.addAnimation("catrunning",tomImage2);
       tom.changeAnimation("catrunning",tomImage2);

   }

  //For moving and changing animation write code here


}
