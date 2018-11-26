var headshot;
function preload() {
	headshot = loadImage('headshot.png');
}
function setup() {
	createCanvas(700, 400);
}

function draw() {
	noStroke();
	fill(140,255,200);
	rect(70,0,700,400);
	image(headshot,0,100);
}
