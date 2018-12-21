function setup() {
	createCanvas(500, 500);

	stroke(255);
    background(0,0,0);
}

function draw() {

	background(0,0,0,75);
	/*rgba transparenter Background lässt den Zustand aus dem
	Frame vorher noch durchscheinen
	Spiel mit den alpha Werten, mehr oder weniger?
	*/


	var sec = second();
	var min = minute();
	var std 	= hour();


	var d = map(sec, 0, 59, 0, width);

	noFill();
	stroke(255);
	ellipse(width/2, height/2, d,d );

	frameRate(1);
	/* Hier setzen wir die frameRate auf 1 Frame pro Sekunde.
	Das genügt für unsere Uhr und braucht weniger Performance vom Browser
	*/

}
