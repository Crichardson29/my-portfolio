//order: 2,5,6,1,3,4

let switchcolor;

//making all of the lights off
//false = off true = on
let light1 = false;
let light2 = false;
let light3 = false;
let light4 = false;
let light5 = false;
let light6 = false;

function setup() {
  let canvas = createCanvas(300, 300);
  canvas.parent('sketch-container');
  colorMode(HSB);
  switchcolor = random(190, 360);
}

function draw() {
  background("white");

  //drawing lightswitches and lights
  //random color for lightswitches every time program is run

  //switch 1
  strokeWeight(2);
  fill(switchcolor, 30, 99);
  rect(20, 220, 40, 100);
  rect(30, 250, 20, 40);
  fill(0, 99, 4);
  text("1", 36, 275);

  //light 1
  line(40, 0, 40, 40);
  circle(40, 60, 40);
  fill("grey");
  ellipse(40, 70, 30, 20);
  
  //turning lights on/off depending on whether the variable is true or false
  
 if (light1) {
    fill("yellow");
   circle(40, 65, 13);
  } else {
    fill("grey");
    circle(40, 65, 13);
  }
 

  //switch 2
  fill(switchcolor, 30, 99);
  rect(80, 220, 40, 100);
  rect(90, 250, 20, 40);
  fill(0, 99, 4);
  text("2", 96, 275);

  //light 2
  line(98, 0, 98, 40);
  circle(98, 60, 40);
  fill("grey");
  ellipse(98, 70, 30, 20);
  
  //turning off/on light 2
   if (light2) {
    fill("yellow");
   circle(98, 65, 13);
    } else {
    fill("grey");
    circle(98, 65, 13);
  }

  //switch 3
  fill(switchcolor, 30, 99);
  rect(150, 220, 40, 100);
  rect(160, 250, 20, 40);
  fill(0, 99, 4);
  text("3", 166, 275);

  //light 3
  line(170, 0, 170, 40);
  circle(170, 60, 40);
  fill("grey");
  ellipse(170, 70, 30, 20);
  
  if (light3) {
    fill("yellow");
   circle(170, 65, 13);
    } else {
    fill("grey");
  circle(170, 65, 13);
    }

  //switch 4
  fill(switchcolor, 30, 99);
  rect(220, 220, 40, 100);
  rect(230, 250, 20, 40);
  fill(0, 99, 4);
  text("4", 236, 275);

  //light 4
  line(240, 0, 240, 40);
  circle(240, 60, 40);
  fill("grey");
  ellipse(240, 70, 30, 20);
  
  if (light4) {
    fill("yellow");
   circle(240, 65, 13);
    } else {
    fill("grey");
    circle(240,65, 13);
    }

  //switch 5
  fill(switchcolor, 30, 99);
  rect(280, 220, 40, 100);
  rect(290, 250, 20, 40);
  fill(0, 99, 4);
  text("5", 296, 275);

  //light 5
  line(300, 0, 300, 40);
  circle(300, 60, 40);
  fill("grey");
  ellipse(300, 70, 30, 20);
  
     if (light5) {
    fill("yellow");
   circle(300, 65, 13);
    } else {
    fill("grey");
    circle(300, 65, 13);
    }



  //switch 6
  fill(switchcolor, 30, 99);
  rect(340, 220, 40, 100);
  rect(350, 250, 20, 40);
  fill(0, 99, 4);
  text("6", 356, 275);

  //light 6
  line(360, 0, 360, 40);
  circle(360, 60, 40);
  fill("grey");
  ellipse(360, 70, 30, 20);
     if (light6) {
    fill("yellow");
   circle(360, 65, 13);
    } else {
    fill("grey");
    circle(360, 65, 13);
    }
  
  // if all lights are on, new background and words
  
  if(light1 && light2 && light3 && light4 && light5 && light6) {
    background(189, 27, 100);
    stroke("black");
    fill("black");
    textSize(50);
    text('YOU WON!',70,215);
  }
  
}

//lights turning on or off
function keyPressed() {
  switch (key) {
    case '1':
      light2 = true;
      break;
    case '2':
      light5= false
      light2 = false
      light3 = true
      break;
    case '3':
      light1 = true
      light3= false
      break;
    case '4':
      light3 = true
      light6 = true
      break;
    case '5':
      light1 = true
      light5 = false
      light6 = false
      break;
    case '6':
      light2 = false
      light3 = false
      light4 = true
      light5 = true
      break;
    default:
      //all off?
      break;
  }
}
