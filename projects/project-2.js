// ── Project One ───────────────────────────────────────
// Replace this starter code with your own project!

let rainX= 200;
let rainY= 200;
let rainX1=200;
let rainY1=200;
//this is my variable used to control the size of ocean
let ocean=0;
//this is my varibale used to control location of diamond
let diamondX=200
let diamondY=200
//other variables used throughout my code
let etimer;
let dsize= 5;
let colorSea;



function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch-container');
  colorSea= random(10,100);
}


function draw() {
 colorMode(HSB)
  background(220);
  
  //rain
  rainX1= random(0,400);
  rainY1= random(0,400);
  rainX2= random(0,400);
  rainY2= random(0,400);
  rainX3= random(0,400);
  rainY3= random(0,400);
  rainX4=random(0,400);
  rainY4=random(0,400);
  rainX5=random(0,400);
  rainY5=random(0,400);
  rainX6=random(0,400);
  rainY6=random(0,400);
  rainX7=random(0,400);
  rainY7=random(0,400);
  strokeWeight(0);
  fill(206, colorSea, 96);
  frameRate(8);
  ellipse(rainX1,rainY1,10,20);
  ellipse(rainX2,rainY2,10,20);
  ellipse(rainX3,rainY3,10,20);
  ellipse(rainX4,rainY4,10,20);
  ellipse(rainX5,rainY5,10,20);
  ellipse(rainX6,rainY6,10,20);
  ellipse(rainX7,rainY7,10,20);
  
  //ocean
  strokeWeight(ocean);
  strokeWeight(ocean+=20)
  stroke(206,colorSea,96)
  line(0,398,400,398);
  
  diamond = width/2
  diamond = height/2
  
  //nightsky
  if(ocean==800) {
    etimer = millis();
  }
  
  //second scene:sky
  if(ocean>800) {
  background(234, 72, 20);
    strokeWeight(1);
    stroke("black")
    fill("white")
    
    
      if (millis()< etimer+3000) {
        
        //drawing big diamond
quad(diamondX-45,diamondY-60,diamondX-29,diamondY-60,diamondX-35,diamondY-40,diamondX-60,diamondY-40);
quad(diamondX-29,diamondY-60,diamondX-10,diamondY-60,diamondX-10,diamondY-40,diamondX-35,diamondY-40);
    quad(diamondX-10,diamondY-60, diamondX+12,diamondY-60,diamondX+15,diamondY-40,diamondX-10,diamondY-40); quad(diamondX+8,diamondY-60,diamondX+22,diamondY-60,diamondX+40,diamondY-40,diamondX+15,diamondY-40);
        
    triangle(140,160,165,160,190,210);
    triangle(165,160,190,160,190, 210);
    triangle(190,160,215,160,190,210);
    triangle(215,160, 240,160,190,210);
        
  }else{
      background(234, 72, 20)
    //draw smaller diamonds in sky
    //diamond 1
    quad(180,140,183,140,182,145,176,145);
    quad(183,140,190,140,190,145,182,145);
    quad(190,140,197,140,198,145,190,145);
    quad(197,140,200,140,204,145,198,145);
        
    triangle(176,145,182,145,190,163);
    triangle(182,145,190,145,190,163);
    triangle(190,145,198,145,190,163);
    triangle(198,145,204,145,190,163);
  
  //diamond 2
    quad(80,50,83,50,82,55,76,55);
    quad(83,50,90,50,90,55,82,55);
    quad(90,50,97,50,98,55,90,55);
    quad(97,50,100,50,104,55,98,55);
        
    triangle(76,55,82,55,90,73);
    triangle(82,55,90,55,90,73);
    triangle(90,55,98,55,90,73);
    triangle(98,55,104,55,90,73);
  
  //diamond 3
  quad(60,300,63,300,62,305,56,305);
    quad(63,300,70,300,70,305,62,305);
    quad(70,300,77,300,78,305,70,305);
    quad(77,300,80,300,84,305,78,305);
        
    triangle(56,305,62,305,70,323);
    triangle(62,305,70,305,70,323);
    triangle(70,305,78,305,70,323);
    triangle(78,305,84,305,70,323);
    
      //diamond 4
  quad(340,270,343,270,342,275,336,275);
    quad(343,270,350,270,350,275,342,275);
    quad(350,270,357,270,358,275,350,275);
    quad(357,270,360,270,364,275,358,275);
        
    triangle(336,275,342,275,350,293); 
    triangle(342,275,350,275,350,293);
    triangle(350,275,358,275,350,293);
    triangle(358,275,364,275,350,293);
    
    //diamond 5
    quad(340,70,343,70,342,75,336,75);
    quad(343,70,350,70,350,75,342,75);
    quad(350,70,357,70,358,75,350,75);
    quad(357,70,360,70,364,75,358,75);
        
    triangle(336,75,342,75,350,93); 
    triangle(342,75,350,75,350,93);
    triangle(350,75,358,75,350,93);
    triangle(358,75,364,75,350,93);
  
    
  }
}
}