// ── Project One ───────────────────────────────────────
// Replace this starter code with your own project!

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch-container');

  sharkx1= random(200,280);
  sharky1= random(200,280);
  sharkx2= random(10,90);
  sharky2= random (200,280);
  sharkx3=random (20,50)
  sharky3=random(250,300)
  
}

  let sharkx1= 0
  let sharky1= 0
  let sharkx2= 0
  let sharky2= 0
  let sharkx3 = 0
  let sharky3 = 0
  
  
  let boatX= 200
  let boatY= 200
  let sizes= 20
  let boatMove = 1
  
  
function draw() {
  background(220);
  
  
  strokeWeight(1);
  fill(66, 155, 245);
  rect(0,200,500,300);
  fill(179, 217, 255);
  rect(0,0,400,200);
  
  
  
    
if(boatX<90) {
  boatMove=8
}

if(boatX>250) {
  boatMove=-8;
}
  
  boatX= boatX+boatMove;
  
  
  stroke("black");
  strokeWeight(2)
  
  //body of boat
  line(boatX-20,boatY+40,boatX+100,boatY+50);
  line(boatX-21,boatY+40, boatX-60, boatY+30);
  line(boatX+100,boatY+50,boatX+140,boatY+40);
  line(boatX+140,boatY+40, boatX+ 125,boatY+65);
  line(boatX-60,boatY+30,boatX-40,boatY+60);
  
  // filling boat with color
  fill(250, 192, 211);
quad(boatX+40,boatY+22,boatX+37,boatY+45,boatX-10,boatY+40, boatX,boatY+20);
  quad(boatX+40,boatY+22,boatX+37,boatY+45, boatX+100,boatY+50,boatX+80,boatY+25 );
  fill("white");
  strokeWeight(0);
  triangle(boatX+100,boatY+50,boatX+140,boatY+40, boatX+125,boatY+65);
quad(boatX+100,boatY+50,boatX+125,boatY+65,boatX-22,boatY+61,boatX-22,boatY+42);
  quad(boatX-22,boatY+61,boatX-22,boatY+42, boatX-60,boatY+30,boatX-40,boatY+60);
  
  
  strokeWeight(2);
  

  //top window of boat
  line(boatX+100,boatY+50, boatX+80,boatY+25);
  line(boatX+80,boatY+25,boatX,boatY+20);
  line(boatX,boatY+20,boatX-10,boatY+40);
  line(boatX+40,boatY+20,boatX+38,boatY+45)
  
  //sail right
  line(boatX+40,boatY+23,boatX+40, boatY-117)
  fill("white");
  triangle(boatX+48,boatY-104, boatX+48, boatY, boatX+120,boatY+10);//right sail
  line(boatX+48,boatY-105, boatX+40,boatY-117);//top connector
  line(boatX+48,boatY, boatX+40,boatY+5);// bottom connector
  
 //sail left 
  triangle(boatX+33, boatY-110, boatX+33, boatY-5, boatX-50, boatY-20);
  line(boatX+40,boatY-117, boatX+33,boatY-110);// top connector
  line(boatX+33,boatY-5, boatX +40,boatY);
  
  
  //moving sharks
   sharkx1= random(200,280);
   sharky1= random(200,280);
  sharkx2= random(10,90);
   sharky2= random (220,280);
  sharkx3=random (20,50);
  sharky3=random(250,350);
  
 //shark fin
  fill("grey")
  frameRate(2);
  triangle(sharkx1+100, sharky1+100,sharkx1+133, sharky1+60,sharkx1+133, sharky1+100,);
  triangle(sharkx2+100, sharky2+100,sharkx2+130, sharky2+60,sharkx2+133, sharky2+100,)
  triangle(sharkx3, sharky3,sharkx3+33, sharky3-40,sharkx3+33, sharky3)

//triangle(100,100,130,60,133,100)
  //  sharkx/130, sharky/60, sharkx/133, sharky/100, sharkx/100, sharky/100);
  
  
  
}