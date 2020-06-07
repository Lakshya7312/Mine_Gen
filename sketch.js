var coffin;
var song;

function preload(){
 coffin = loadImage("coffin.gif");
 song = loadSound("dance.mp3");
}

function setup() {
  createCanvas(800,500);
  
  song.play();
}

function draw() {
  background(28,29,21);  
  
  image(coffin, 200, 20, 310, 310);

  fill("cyan");
  textSize(20);
  text("Ha! You just got trolled!", 570, 50);

}