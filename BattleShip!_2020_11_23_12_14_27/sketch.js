var spaceship;
var ufo1, ufo2, ufo3, ufo4, ufo5, ufo6, ufo7;
var earth;
var bullet;
var bullet1;
var bullet2;
var edges;
var left_but;
var right_but;
var reset_but;
var boss_ufo;
var space;

var ufo_img;
var spaceship_img;
var earth_img;
var left_but_img;
var right_but_img;
var shoot_but_img;
var reset_but_img;
var boss_ani;
var space_back;

var ufoGroup;
var bulletGroup1;
var bulletGroup;

var gameState = "play";

var gunshot;
var ufo_def;
var back;
var game_end;
var space_back;

var score = 0;

var wave = 1;

var timer = 25;

var level = 1;

function preload() {
  spaceship_img = loadImage("Images/spaceship.png");
  ufo_img = loadImage("Images/ufo.png");
  gunshot = loadSound("Sound/gunshot.mp3");
  ufo_def = loadSound("Sound/ufo_def.mp4");
  back = loadSound("Sound/space.mp3");
  earth_img = loadImage("Images/earth.png");
  game_end = loadSound("Sound/GAMEOVER.wav");
  left_but_img = loadImage("Images/left_but.png");
  right_but_img = loadImage("Images/right_but.png");
  shoot_but_img = loadImage("Images/shoot_but.png")
  reset_but_img = loadImage("Images/Reset_but.png");
  space_back = loadImage("Images/space.jpg");
  boss_ani = loadAnimation("Images/boss.png", "Images/boss1.png", "Images/boss2.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  ufoGroup = createGroup();
  bulletGroup = createGroup();
  bulletGroup1 = createGroup();

  space = createSprite(windowWidth - windowWidth, windowHeight - windowHeight, windowWidth, windowHeight);
  space.addImage(space_back);
  space.scale = 2
  space.velocityY = 4;

  spaceship = createSprite(windowWidth / 2, windowHeight - 125, 10, 10);
  spaceship.scale = 0.3;
  spaceship.addImage(spaceship_img);

  left_but = createSprite(windowWidth - 1470, windowHeight - 150, 20, 20);
  left_but.scale = 0.4;
  left_but.addImage(left_but_img)

  right_but = createSprite(windowWidth - 75, windowHeight - 150, 20, 20);
  right_but.scale = 0.4;
  right_but.addImage(right_but_img)

  shoot_but = createSprite(windowWidth - 200, windowHeight - 100, 30, 30);
  shoot_but.scale = 0.1;
  shoot_but.addImage(shoot_but_img)

  ufo1 = createSprite(random(windowWidth - windowWidth, windowWidth), random(windowHeight - windowHeight, windowHeight), 20, 20);
  ufo1.scale = 0.3;
  ufoGroup.add(ufo1);
  ufo1.addImage(ufo_img);

  ufo2 = createSprite(random(windowWidth - windowWidth, windowWidth), random(windowHeight - windowHeight, windowHeight - 500), 20, 20);
  ufo2.scale = 0.3;
  ufoGroup.add(ufo2);
  ufo2.addImage(ufo_img);

  ufo3 = createSprite(random(windowWidth - windowWidth, windowWidth), random(windowHeight - windowHeight, windowHeight - 500), 20, 20);
  ufo3.scale = 0.3;
  ufoGroup.add(ufo3);
  ufo3.addImage(ufo_img);

  ufo4 = createSprite(random(windowWidth - windowWidth, windowWidth), random(windowHeight - windowHeight, windowHeight - 500), 20, 20);
  ufo4.scale = 0.3;
  ufoGroup.add(ufo4);
  ufo4.addImage(ufo_img);

  ufo5 = createSprite(random(windowWidth - windowWidth, windowWidth), random(windowHeight - windowHeight, windowHeight - 500), 20, 20);
  ufo5.scale = 0.3;
  ufoGroup.add(ufo5);
  ufo5.addImage(ufo_img);

  ufo6 = createSprite(random(windowWidth - windowWidth, windowWidth), random(windowHeight - windowHeight, windowHeight - 500), 20, 20);
  ufo6.scale = 0.3;
  ufoGroup.add(ufo6);
  ufo6.addImage(ufo_img);

  ufo7 = createSprite(random(windowWidth - windowWidth, windowWidth), random(windowHeight - windowHeight, windowHeight - 500), 20, 20);
  ufo7.scale = 0.3;
  ufoGroup.add(ufo7);
  ufo7.addImage(ufo_img);

  boss_ufo = createSprite(windowWidth / 2, windowHeight - 650, 20, 20);
  ufoGroup.add(boss_ufo);
  boss_ufo.scale = 0.5
  boss_ufo.addAnimation("animation", boss_ani);

  reset_but = createSprite(windowWidth - 1500, windowHeight - 750, 20, 20);
  reset_but.addImage(reset_but_img);
  reset_but.scale = 0.2;
}




function draw() {
  background(0);

  if (space.y > windowHeight) {
    space.y = space.height / 2;
  }

  if (mousePressedOver(left_but)) {
    spaceship.x = spaceship.x - 6;
  }

  if (mousePressedOver(right_but)) {
    spaceship.x = spaceship.x + 6;
  }

  edges = createEdgeSprites();

  spaceship.collide(edges);


  //  -----------------------------------------> level 1 <--------------------------------------------------------

  //  -----------------------------------------> wave 1 <---------------------------------------------------------
  if (gameState === "play") {



    ufo4.visible = false;
    ufo5.visible = false;
    ufo6.visible = false;
    ufo7.visible = false;
    boss_ufo.visible = false;

    if (mousePressedOver(shoot_but)) {
      bullet_fun();
    }

    ufo1.x = random(windowWidth - windowWidth, windowWidth - 1000);
    ufo1.y = random(windowHeight - windowHeight, windowHeight / 2);

    ufo2.x = random(windowWidth - 1000, windowWidth - 500);
    ufo2.y = random(windowHeight - windowHeight, windowHeight / 2);

    ufo3.x = random(windowWidth - 500, windowWidth);
    ufo3.y = random(windowHeight - windowHeight, windowHeight / 2);


    spaceship.visible = true;

    if (bulletGroup1.isTouching(spaceship)) {
      gameState = "end";
    }

    if (bulletGroup.isTouching(ufo1)) {
      ufo1.destroy();
      score = score + 2;
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo2)) {
      ufo2.destroy();
      score = score + 2;
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo3)) {
      ufo3.destroy();
      score = score + 2;
      bulletGroup.destroyEach();
      ufo_def.play();
    }

    if (score === 6) {
      wave++
      gameState = "wave2";
    }


    // ------------------------------------------------> wave 2 <-------------------------------------------------
  } else if (gameState === "wave2") {



    ufo4.visible = true;
    ufo5.visible = true;
    ufo6.visible = true;
    ufo7.visible = true;
    boss_ufo.visible = false;

    ufo4.x = ufo4.x - random(0, 10);
    ufo4.y = ufo4.y + random(0, 10);

    ufo5.x = ufo5.x + random(0, 10);
    ufo5.y = ufo5.y - random(0, 10);

    ufo6.x = ufo6.x - random(0, 10);
    ufo6.y = ufo6.y + random(0, 10);

    ufo7.x = ufo7.x + random(0, 10);
    ufo7.y = ufo7.y + random(0, 10);

    if (mousePressedOver(shoot_but)) {
      bullet_fun();
    }

    if (ufo4.x >= windowWidth || ufo4.x <= windowWidth - windowWidth) {
      ufo4.x = random(windowWidth - windowWidth, windowWidth)
    }
    if (ufo4.y >= windowHeight / 2 || ufo4.y <= windowHeight - windowHeight) {
      ufo4.y = random(windowHeight - windowHeight, windowHeight / 2);
    }
    if (ufo5.x >= windowWidth || ufo5.x <= windowWidth - windowWidth) {
      ufo5.x = random(windowWidth - windowWidth, windowWidth)
    }
    if (ufo5.y >= windowHeight / 2 || ufo5.y <= windowHeight - windowHeight) {
      ufo5.y = random(windowHeight - windowHeight, windowHeight / 2);
    }
    if (ufo6.x >= windowWidth || ufo6.x <= windowWidth - windowWidth) {
      ufo6.x = random(windowWidth - windowWidth, windowWidth)
    }
    if (ufo6.y >= windowHeight / 2 || ufo6.y <= windowHeight - windowHeight) {
      ufo6.y = random(windowHeight - windowHeight, windowHeight / 2);
    }
    if (ufo7.x >= windowWidth || ufo7.x <= windowWidth - windowWidth) {
      ufo7.x = random(windowWidth - windowWidth, windowWidth)
    }
    if (ufo7.y >= windowHeight / 2 || ufo7.y <= windowHeight - windowHeight) {
      ufo7.y = random(windowHeight - windowHeight, windowHeight / 2);
    }

    spaceship.visible = true;

    if (bulletGroup1.isTouching(spaceship)) {
      gameState = "end";
    }

    if (bulletGroup.isTouching(ufo4)) {
      ufo4.destroy();
      score = score + 3;
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo5)) {
      ufo5.destroy();
      score = score + 3;
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo6)) {
      ufo6.destroy();
      score = score + 3;
      bulletGroup.destroyEach();
      ufo_def.play();
    }
    if (bulletGroup.isTouching(ufo7)) {
      ufo7.destroy();
      score = score + 3;
      bulletGroup.destroyEach();
      ufo_def.play();
    }

    if (score === 18) {
      wave++
      gameState = "wave3";
    }



    // -------------------------------------------------> wave 3 <--------------------------------------------
  } else if (gameState === "wave3") {




    boss_ufo.visible = true;

    if (mousePressedOver(shoot_but)) {
      bullet_boss_fun()
    }

    if (boss_ufo.x === windowWidth / 2) {
      boss_ufo.velocityX = random(5, 10);
    }

    if (boss_ufo.x < windowWidth - windowWidth) {
      boss_ufo.velocityY = random(5, 10);
      boss_ufo.velocityX = 0
    }

    if (boss_ufo.x > windowWidth) {
      boss_ufo.velocityX = random(-5, -10);
      boss_ufo.x = windowWidth / 2;
      boss_ufo.y = windowHeight - 650;
    }

    if (boss_ufo.y >= windowHeight - 450) {
      boss_ufo.velocityX = random(5, 10);
      boss_ufo.velocityY = 0
    }
    if (boss_ufo.y >= windowHeight - 450 && boss_ufo.x >= windowWidth) {
      boss_ufo.velocityY = random(-5, -10);
      boss_ufo.velocityX = 0;
    }

    if (mousePressedOver(left_but)) {
      spaceship.x = spaceship.x - 8;
    }

    if (mousePressedOver(right_but)) {
      spaceship.x = spaceship.x + 8;
    }

    if (bulletGroup.isTouching(boss_ufo)) {
      score = score + 1;
      bulletGroup.destroyEach();
      ufo_def.play();
    }

    if (bulletGroup1.isTouching(spaceship)) {
      gameState = "end";
    }

    if (frameCount % 20 == 0) {
      bullet2 = createSprite(random(windowWidth - windowWidth, windowWidth), windowHeight - 790, 7, 12);
      bullet2.shapeColor = "red";
      bullet2.velocityY = 9;
      bullet2.lifetime = 100;
      bulletGroup1.add(bullet2);
    }

    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }
    if (timer === 0) {
      gameState = "end";
    }

    if (score === 30) {
      gameState = "win level1";
    }


    // ---------------------------------------------> won level 1 <---------------------------------------------
  } else if (gameState === "win level1") {



    boss_ufo.destroy();
    bulletGroup.destroyEach();

    level++

    textSize(30);
    fill(255, 0, 0);
    text("GOOD!! YOU DEFEATED THE BOSS. LET'S GO TO THE NEXT LEVEL!", 10, 400);


    // ------------------------------------------------> end <------------------------------------------------
  } else if (gameState === "end") {



    ufoGroup.destroyEach();
    spaceship.visible = false
    bulletGroup.destroyEach();

    earth = createSprite(windowWidth / 2, windowHeight - 100, 20, 20);
    earth.addImage(earth_img);
    bulletGroup1.add(earth)

    if (frameCount % 60) {
      bullet1 = createSprite(random(windowWidth - windowWidth, windowWidth), windowHeight - 790, 7, 12);
      bullet1.shapeColor = "red";
      bullet1.velocityY = 6;
      bulletGroup1.add(bullet1);
    }

    if (mousePressedOver(reset_but)) {
      reset();
    }
  }

  drawSprites();


  textSize(30);
  fill(random(0, 255), random(0, 255), random(0, 255));
  text("YOUR SCORE:" + score, windowWidth - 300, windowHeight - 740);

  text("WAVE : " + wave + "/3", windowWidth - 510, windowHeight - 740);

  text("Timer: " + timer, windowWidth - 710, windowHeight - 740);

  text("LEVEL: " + level, windowWidth - 900, windowHeight - 740);

}




function bullet_fun() {
  bullet = createSprite(spaceship.x, spaceship.y, 5, 10);

  bullet.shapeColor = random(0, 255), random(0, 255);
  bullet.velocityY = -4;
  bullet.lifetime = 200;
  bulletGroup.add(bullet);

  bullet1 = createSprite(random(windowWidth - windowWidth, windowWidth), windowHeight - 790, 7, 12);
  bullet1.shapeColor = "red";
  bullet1.velocityY = 9;
  bullet1.lifetime = 100;
  bulletGroup1.add(bullet1);

  gunshot.play();
}





function bullet_boss_fun() {
  bullet = createSprite(spaceship.x, spaceship.y, 5, 10);

  bullet.shapeColor = random(0, 255), random(0, 255);
  bullet.velocityY = -4;
  bullet.lifetime = 200;
  bulletGroup.add(bullet);

  gunshot.play();
}




function reset() {
  gameState = "play";
  score = 18;
  wave = 3;
  earth.destroy();
  bulletGroup1.destroyEach()
}