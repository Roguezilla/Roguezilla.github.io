let walls = [];
let p;

function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
  	cnv.position(0, 0);
  	cnv.style("z-index", "-1");
	for (let i = 0; i < 10; i++) {
    	let x1 = random(width);
    	let x2 = random(width);
    	let y1 = random(height);
    	let y2 = random(height);
    	walls.push(new Boundary(x1, y1, x2, y2));
  	}
  	
  	p = new Particle();
}

function draw() {
	clear();
	line(0, 0, width, 0);
  	line(width, 0, width, height);
  	line(width, height, 0, height);
 	line(0, height, 0, 0);
	for(let wall of walls) {
		wall.show(255, 255, 255);
	}
	if(mouseX > 0 && mouseY > 0 && mouseX < windowWidth && mouseY < windowHeight) {	
		p.setPos(mouseX, mouseY);
		p.show();
		p.testHit(walls); 
  	}
}

function windowResized() {
  	resizeCanvas(windowWidth, windowHeight);
  	walls = [];
  	for (let i = 0; i < 10; i++) {
    	let x1 = random(width);
    	let x2 = random(width);
    	let y1 = random(height);
    	let y2 = random(height);
    	walls.push(new Boundary(x1, y1, x2, y2));
  	}
}