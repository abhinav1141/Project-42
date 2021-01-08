var hr,min,sec;
var secangle,minangle,hrsngle;


function setup() {
  createCanvas(400,400);
hr=hour();
min=minute();
sec=second();

secangle=map(sec,0,60,0,360);
minangle=map(min,0,60,0,360);
hrsngle=map(hr,0,24,0,360);
}

function draw() {
  background("black"); 
  angleMode(DEGREES); 

  push()
  arc(200,200,20,20,secangle,360);
  translate(0,0);
  rotate(secangle)
  stroke(255,0,0);
  strokeWeight(7);
  line(200,200,100,0);
  pop()

  push()
  arc(200,200,20,20,minangle,360);
  translate(0,0);
  rotate(minangle)
  stroke("green");
  strokeWeight(7);
  line(200,200,100,0);
  pop()

  push()
  arc(200,200,20,20,hrsngle,360);
  translate(0,0);
  rotate(hrsngle)
  stroke("blue");
  strokeWeight(7);
  line(200,200,100,0);
  pop()

  drawSprites();
}