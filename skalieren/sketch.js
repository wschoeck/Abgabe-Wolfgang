function setup() {
	createCanvas(500, 500);
	background(252,252,252);

	angleMode(DEGREES);


}

w = 500;

function draw() {
  	background(0,232,232);
	noFill();
	stroke(color(0,0,0));
	strokeWeight(20);

	triangle(0,0,w/2,0,w/4,w/4)


}
