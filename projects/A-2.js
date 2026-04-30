function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-container');
}

function draw() {
  background("white");
  colorMode(RGB);
  
  stroke(178,195,214);//stroke color light blue
  fill(178, 195, 214);//fill light blue
  strokeWeight(2.5)
  rect(180,140,160,100);//base of house
  triangle(180,140,260,60,340,140);// top base of house
  line(180,140,240,140);
  
  strokeWeight(4)
  line(160,160,160,140);
  line(260,40,160,140);
  line(260,40,360,140);
  line(360,160,360,140);
  line(340,140,360,160);
  line(160,160,180,140)
  fill(40, 77, 138);// change color to dark blue
  rect(240,180,40,60);// door
  
  strokeWeight(3.7);
  line(290,45,290,70);// chimney
  line(310,45,310,90);// chimney 
  line(290,45,310,45);// chimney
  
  fill(40,77,138);
    square(215,130,25);// left window
    square(280,130,25); // right window
  strokeWeight(2.8);
  stroke("white")
    point(245,210,);// door handle 
    line(218,142,238,142);//window panes
    line(228,132,228,152);// window panes
    line(283,142,302,142);//window panes
    line(292,133,292,152)// window panes
  
  stroke(128, 134, 145);
  line(90,150,157,150);  
  line(172,150,178,150);
  line(90,150,70,190);
  line(70,190,178,190);
  fill(128, 134, 145);
  rect(80,190,98,50);
  
  fill(179, 185, 196); 
  rect(80,190,98,15);
  strokeWeight(1);
  stroke(132, 137, 145);
  line(80,194,178,194);
  line(80,197,178,197);
  line(80,200,178,200);
  
  stroke(50, 53, 56);
  line(100,220,100,205);
  line(100,220,80,240);
  line(100,220,179,220);
  strokeWeight(5)
  line(80,240,0,340)
  line(180,240,300,400)
  
  stroke(82, 156, 78);
  line(343,238,400,238);
  line(77,238,0,238);
  
  
  
  
           
}