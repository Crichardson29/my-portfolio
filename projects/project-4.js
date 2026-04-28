//cake variables
var cake;
var cx, cy;
//candle variables
var candle;
var randomx, randomx2, randomx3;
var candlex, candlex2;
var candley, candley2;
var cmove = 1;
var count = 0;
//game status variables
var gameLost = false;
var gameWon = false;
//water variables
var water;
var wx = 475;
var wy = 0;
var ymove = 0.5;
var randomw, randomw2, randomw3, randomw4;
waterdrop = 1;
//sound variables
var soundwater;

function preload(){
	soundFormats("wav");
//preloading the images
cake = loadImage("Cake.png");
	candle = loadImage("Candle.png");
	water = loadImage("Water.png");
	soundwater= loadSound("Water.wav");

}

function setup() {
	let canvas = createCanvas(400, 400);
  canvas.parent('sketch-container');
	background(100);
	//setting variables equal to smt
	cx = (windowWidth / 2) - 100;
	cy = windowHeight - 200;
	randomx = random(0, windowWidth - 10);
	randomx2 = random(0, windowWidth - 10);
	randomx3 = random(0, windowWidth - 10);
	randomw = random(0, windowWidth-10);
	randomw2 = random(0, windowWidth-10);
	randomw3 = random(0, windowWidth-10);
	randomw4 = random(0, windowWidth - 10);
	candley = 25;
	
}

function draw() {
	//setting up game visuals and calling images
	background("lightblue")
	//rect(cx,cy, 200,200)
	image(cake, cx, cy, 200, 200);
	textSize(15)
	fill("white")
	rect(390,25, 310, 40);
	fill("black")
	text('Try to collect 8 candles and avoid the water!', 400,50);
	text('Candle Count: ' + count, 50, 50);

	//calling the functions

	candles(randomx, cmove);
	candles(randomx2, cmove);
	candles(randomx3, cmove);
	//candles(randomx3, cmove);
	//candleCollison();

	waterDrops(randomw, ymove);
	waterDrops(randomw2, ymove);
	waterDrops(randomw3, ymove);
	waterDrops(randomw4, ymove);
	

	// calling the function if one outcome is reached
	if (gameLost || gameWon) {
		gameOutcome();
	}
	
	
}

function keyPressed() {
	//moving the cake using right and left arrows
	if (keyCode === RIGHT_ARROW) {
		cx += 12;
	}
	if (keyCode === LEFT_ARROW) {
		cx -= 12;
	}
}

function candles(beginx, beginy) {
	//setting the x and y coord of candles
	candlex = beginx;
	candley = candley + beginy;
	//drawing the image
	image(candle, candlex, candley, 60, 60);

	//when you collect 8 candles you win!
	if (count === 8) {
		gameWon = true;
	}

	//if candle touches cake, reset candles and add 1 to count
	if (candlex > cx && candlex < (cx + 200) && candley > cy && candley < (cy + 200)) {
		// console.log("I won and add a candle")
		candley = -50;
		randomx = random(0, windowWidth);
		count += 1;
		gameLost = false;
	}

	//if candle reaches bottom of screen, reset
if (candley > windowHeight) {
		candley = -50
		randomx = cx+20
		randomx4 = random(0, windowWidth - 10);
	}
}


function waterDrops(startx, starty) {
	//setting x and y coord of water
	wx = startx;
	wy = wy + 1.5*starty;
	//drawing waterdroplets
	image(water, wx, wy, 60, 60);


	//game over if cake touches water
	if (wx > (cx + 20) && wx < (cx + 180) && wy > cy && wy < (cy + 200)) {
		gameLost = true;
		if(!soundwater.isPlaying()){
			soundwater.play();
		}
		
	}
}
		
	
   //If off the bottom, reset water droplet
	if (wy > windowHeight) {
		wy = -50
		//this watedrop follows the cake
		randomw = cx+20
		randomw4 = random(0, windowWidth - 10);
	}


	//if (isPlaying) {
		//sound.loop();
	//} else {
		//sound.stop();
	//}		




function gameOutcome() {
	//switching the background depending on whether the player won or lost
	if (gameLost) {
		background("red");
		textSize(50);
		count=0;
		text('Oh no! You lost!', (windowWidth / 2) - 150, windowHeight / 2);
	}

	if (gameWon) {
		background("green");
		textSize(50);
		count=0
		text('Yay! You Won!', (windowWidth / 2) - 150, windowHeight / 2);
	}
}