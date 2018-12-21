function setup() {
	createCanvas(windowWidth, windowHeight);

    colorMode(HSL,360,100,100);
    /*die Farbe wird nun im Hue, Saturation, Lightness Modus definiert
	 https://en.wikipedia.org/wiki/HSL_and_HSV
     Hue von 0-360
     Saturation von 0-100
     Lightness von 0-100

     Vorteil: man hat einen kontinuierlichen Farbkreis
	*/

}

function draw() {
	var sec = second();
	var min = minute();
	var std 	= hour();


	var hue=map(sec, 0, 59, 0, 360);


	var c = color(hue, 100, 50);
	background(c);



	fill(0);
	noStroke();
	rectMode(CENTER);
	rect(width/2,height/2,200,200);

}
