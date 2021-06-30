var gameState = "play";
var corona,coronaGrp1,coronaGrp2,coronaGrp3,coronaGrp4,coronaImg;
var boy,boyImgU,boyImgD,boyImgR,boyImgL;
var obstacles,obstacleImg;
var food;
var power,power2,power3,power4,power5;
var powerImg;
var foodC,Viruskills;
var road,road1,road2,road3,road4,road5,road6;
var groundImg;
var over,overImg;
var house2,house3,house4,house5,house6,house8;
var houseImg,houseImg2,houseImg3,houseImg4,houseImg5,houseImg6,houseImg7,houseImg8,houseImg9,houseImg10;
var line,line1,line2,line3,line4;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;

function preload(){
  coronaImg=loadImage("images/v1.png");
  groundImg=loadImage("images/grass2.jpg");
 // houseImg=loadImage("images/h1.png");
  boyImgU=loadImage("images/personU.png");
  boyImgD=loadImage("images/personD.png");
  boyImgR=loadImage("images/personR.png");
  boyImgL=loadImage("images/personL.png");
  houseImg2=loadImage("images/h2.png");
  houseImg3=loadImage("images/h3.png");
  houseImg4=loadImage("images/h4.png");
  houseImg5=loadImage("images/h5.png");
  houseImg6=loadImage("images/h6.png");
  houseImg8=loadImage("images/h1.png");
  overImg=loadImage("images/over.png");
  powerImg=loadImage("images/s1.png");
  

  
 // houseImg7=loadImage("images/h6.png");
  // houseImg9=loadImage("images/h5.png")
 // houseImg10=loadImage("images/h2.png");
 
}

function setup() {
  createCanvas(1350,655);
 boy=createSprite(200,400,40,50);
 road=createSprite(500,200,1700,50);
 road1=createSprite(500,600,1700,50);
 road2=createSprite(800,400,50,800);
 road3=createSprite(100,400,50,800);
 road4=createSprite(460,400,50,800);
 road5=createSprite(1100,400,50,800);
 road6=createSprite(500,398,1700,50);
 power=createSprite(460,20);
 power.addImage(powerImg);
 power.scale=0.2;
 power2=createSprite(150,400);
 power2.addImage(powerImg);
 power2.scale=0.2;
 power3=createSprite(1100,20);
 power3.addImage(powerImg);
 power3.scale=0.2;
 power4=createSprite(1300,400);
 power4.addImage(powerImg);
 power4.scale=0.2;
 power5=createSprite(1100,550);
 power5.addImage(powerImg);
 power5.scale=0.2;
 coronaGrp1=new Group();
 coronaGrp2=new Group();
 coronaGrp3=new Group();
 coronaGrp4=new Group();
 line1=createSprite(675,1,1350,10);
 line2=createSprite(1,322,10,660);
 line3=createSprite(1350,322,10,660);
 line4=createSprite(675,630,1350,10);
 box1=createSprite(35,90,70,160);
 box2=createSprite(35,300,70,145);
 box3=createSprite(35,500,70,145);
 box4=createSprite(280,90,300,160);
 box5=createSprite(280,298,300,140);
 box6=createSprite(280,498,300,140);
 box7=createSprite(630,90,280,160);
 box8=createSprite(630,298,280,137);
 box9=createSprite(630,498,280,137);
 box9.shapeColor="green";
 box10=createSprite(950,90,240,160);
 box11=createSprite(950,300,240,138);
 box12=createSprite(950,498,240,138);
 box13=createSprite(1250,90,240,155);
 box14=createSprite(1250,300,240,135);
 box15=createSprite(1250,498,240,138);
//  house=createSprite(300,300,20,30)
//  house.addImage(houseImg);
//  house.scale= 0.4;
 house2=createSprite(620,300,20,30);
 house2.addImage(houseImg2);
 house2.scale=0.2;
 house3=createSprite(950,100,20,30);
 house3.addImage(houseImg3);
 house3.scale=0.3;
 house4=createSprite(260,500,20,30);
 house4.addImage(houseImg4);
 house4.scale=0.3;
 house5=createSprite(950,500,20,30);
 house5.addImage(houseImg5);
 house5.scale=0.3;
 house6=createSprite(290,100,20,30);
 house6.addImage(houseImg6);
 house6.scale=0.3;
//  house7=createSprite(950,100,20,30);
//  house7.addImage(houseImg7);
//  house7.scale=0.5;
 house8=createSprite(1240,296,20,30);
 house8.addImage(houseImg8);
 house8.scale=0.2;
 over=createSprite(675,327);
 over.addImage(overImg);
 over.scale=0.8;
//  house9=createSprite(1240,100,20,30);
//  house9.addImage(houseImg9);
//  house9.scale=0.5;
//  house10=createSprite(1240,500,20,30);
//  house10.addImage(houseImg10);
//  house10.scale=0.5;
 boy=createSprite(458,395,20,30);
 boy.addImage(boyImgU);
 boy.scale=0.06;
 
 foodC=0;
 Viruskills=0;

}

function draw() {
  background(groundImg);  
if(gameState === "play"){ 
  line1.visible=false;
  line2.visible=false;
  line3.visible=false;
  line4.visible=false;
  box1.visible=false;
  box2.visible=false;
  box3.visible=false;
  box4.visible=false;
  box5.visible=false;
  box6.visible=false;
  box7.visible=false;
  box8.visible=false;
  box9.visible=false;
  box10.visible=false;
  box11.visible=false;
  box12.visible=false;
  box13.visible=false;
  box14.visible=false;
  box15.visible=false;
  over.visible=false;
  boy.collide(line1);
  boy.collide(line2);
  boy.collide(line3);
  boy.collide(line4);

  boy.collide(box1);
  boy.collide(box2);
  boy.collide(box3);
  boy.collide(house2);
  boy.collide(box5);
  boy.collide(house3);
  boy.collide(box7);
  boy.collide(house4);
  boy.collide(box9);
  boy.collide(house5);
  boy.collide(box11);
  boy.collide(house6);
  boy.collide(box13);
  //boy.collide(house7);
  boy.collide(house8);
  boy.collide(box15);

  
  
  if(keyDown("up")){
    boy.y = boy.y -4;
    boy.addImage(boyImgU);
  }

  if(keyDown("down")){
    boy.y = boy.y +4;
    boy.addImage(boyImgD);

  }

  if(keyDown("right")){
    boy.x = boy.x +4;
    boy.addImage(boyImgR);
  }

  if(keyDown("left")){
    boy.x = boy.x -4;
    boy.addImage(boyImgL);
  }
   
 if(boy.isTouching(coronaGrp1) || boy.isTouching(coronaGrp2) || boy.isTouching(coronaGrp3) ||
 boy.isTouching(coronaGrp4)){
   gameState="end";
    coronaGrp1.setVelocityXEach(0);
    coronaGrp2.setVelocityXEach(0);
    coronaGrp3.setVelocityYEach(0);
    coronaGrp4.setVelocityYEach(0);
    coronaGrp1.setLifetimeEach(-1);
    coronaGrp2.setLifetimeEach(-1);
    coronaGrp3.setLifetimeEach(-1);
    coronaGrp4.setLifetimeEach(-1);
    coronaGrp1.destroyEach();
    coronaGrp2.destroyEach();
    coronaGrp3.destroyEach();
    coronaGrp4.destroyEach();

 }
  }

  

  spawncorona4();
  spawncorona3();
  spawncorona2();
  spawncorona();
  drawSprites();

  stroke("white");
  textSize(25);
  fill("white");
  text("food:"+ foodC,600,50);
  
    stroke("black");
  textSize(25);
  fill("black");
  text("viruskills:"+ Viruskills,580,90);


  fill("white");
  stroke("white");
   textSize(20);
   text("Collect all foods OR",528,498);

   fill("black");
  stroke("black");
   textSize(20);
   text("Kill more than 10 virus",525,530);
  if(gameState==="end"){
    over.visible=true;
    boy.visible=false;
    coronaGrp1.setVelocityXEach(0);
    coronaGrp2.setVelocityXEach(0);
    coronaGrp3.setVelocityYEach(0);
    coronaGrp4.setVelocityYEach(0);

  }
}

  function spawncorona(){
    if(frameCount%160 === 0){
      corona=createSprite(200,300,50,20);
      corona.x= 2;
      corona.y= 200;
      corona.velocityX=(Math.round(random(2,8)));
      corona.addImage(coronaImg);
      corona.scale=0.1;
      coronaGrp1.add(corona);

    }
  }

  function spawncorona2(){
    if(frameCount%180 === 0){
      corona2=createSprite(200,300,50,20);
      corona2.x= 2;
      corona2.y= 600;
      corona2.velocityX=(Math.round(random(2,8)));
      corona2.addImage(coronaImg);
      corona2.scale=0.1;
      coronaGrp2.add(corona2);
    }
  }

  function spawncorona3(){
    if(frameCount%200 === 0){
      corona3=createSprite(200,300,50,20);
      corona3.x= 800;
      corona3.y= 2;
      corona3.velocityY=(Math.round(random(2,8)));
      corona3.addImage(coronaImg);
      corona3.scale=0.1;
      coronaGrp3.add(corona3);
    }
  }

  function spawncorona4(){
    if(frameCount%220 === 0){
      corona4=createSprite(200,300,50,20);
      corona4.x= 100;
      corona4.y= 750;
      corona4.velocityY=(Math.round(random(-2,-8)));
      corona4.addImage(coronaImg);
      corona4.scale=0.1;
      coronaGrp4.add(corona4);
    }
  }