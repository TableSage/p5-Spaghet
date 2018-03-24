var touches = [];
function setup() {
	createCanvas(200,200);
	for (var i = 0; i < 5; i++){ touches.push([Math.random()*200,Math.random()*200]); }
	for (var f = 0; f < touches.length; f++){
		ellipse(touches[f][0],touches[f][1],10);
		for (var s = 0; s < touches.length-f; s++){
			line(touches[f][0],touches[f][1],touches[s+f][0],touches[s+f][1]);
		}
	}
} //end setup

