function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-container');
}

function draw() {
  background(220);
  fill("lightpink")
   rect(120, 120, 160, 60);
  fill("lightyellow")
  circle(160,150,28);
  circle(240,150,28)
  fill("black")
  circle(160,150,8)
  circle(240,150,8)
  fill("hotpink")
  arc(201, 160, 24, 24, 0, PI);
  rect(189,180,25,20)
  fill("lightpink")
  rect(160,200,80,80)
  fill("hotpink")
  circle(200,220,15)
  fill("lightyellow")
  circle(200,240,10)
  fill("hotpink")
  circle(200,260,14)
  rect(160,280,15,40)
  rect(225,280,15,40)
  fill("lightblue")
  circle(170,114,13)
  circle(230,114,13)
  circle(170,103,10)
  circle(230,103,10)
  circle(170,94,8)
  circle(230,94,8)
  fill("hotpink")
  triangle(170, 120, 170, 100, 200, 120);
  triangle(200,120, 230,100, 230,120)
  fill("yellow")
  rect(191,110,18,10)
}