function setup() {
  createCanvas(1000,1000)
}

function draw() {
  background(200,200,200)
  fill(0,100,250,100)
  stroke(255,100)
	for (var i=0;i<touches.length;i++) {
		ellipse(touches[i].x, touches[i].y, 300, 300)
	}
}

function touchStarted() {
  return false
}
