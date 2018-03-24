/////////////////////////////////////////////////
//////////////////BrainTrain/////////////////////
/////////////////////////////////////////////////

var timeStep;							//framecount * timeScale
var noiseScale 	= 	0.0025;				//multiplied by noise
var ns = noiseScale;
var timeScale 	= 	0.3; 				//multiplied by framecount
/////////////////////////////////////////////////
function setup() {createCanvas(400,400);background(0);}
/////////////////////////////////////////////////
function draw() {
	step();
	background(0,8);
	strokeWeight(0.1);
	stroke(255);
	fill(0,0,0,0);

  	driftySnake(100); //Noise scale 0.002, timeScale 0.3
}
/////////////////////////////////////////////////
function n(val, val2 = 0) {
	return map( noise( 	( val + timeStep ) * noiseScale, 
					   	( val2 + timeStep ) * noiseScale ),
						0, 1, -width/8, width*1.125);
}

function step(){
	timeStep = frameCount * timeScale;
}

function driftySnake(numPoints=100){
	noiseScale = ns * sin(pow((frameCount * ns / 3),1-(frameCount*ns/1)));
	var gap = 35;
	for (i=0; i<numPoints; i++){
  		point(n(0,i*gap),n(i*gap,0));
  	}
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////