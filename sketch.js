function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  background(255)
  fill(0,100,250,100)
  stroke(255,100)
	for (var i=0;i<touches.length;i++) {
		ellipse(touches[i].x, touches[i].y, 80, 80)
	}
}
