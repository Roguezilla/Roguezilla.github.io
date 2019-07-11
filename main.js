let walls = [];
let p;
let x = 1;
let y = 1;
let easing = 0.05;

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function setup() {
	if(!isMobileDevice()) {
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
}

function draw() {
	if(!isMobileDevice()) {
		clear();
		line(0, 0, width, 0);
		line(width, 0, width, height);
		line(width, height, 0, height);
 		line(0, height, 0, 0);
		for(let wall of walls) {
			wall.show(255, 255, 255);
		}

		x += (mouseX - x) * easing;
  		y += (mouseY - y) * easing;
		p.setPos(x, y);
		p.testHit(walls); 
	}
}

function windowResized() {
	if(!isMobileDevice()) {
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
}