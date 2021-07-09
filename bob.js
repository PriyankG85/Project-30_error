class bob {
	constructor(x, y, r) {

		var options = {
			isStatic: true,
			restitution: 0.3,
			friction: 0,
			density: 1.2
		}

		this.x = x;
		this.y = y;
		this.r = r;
		this.body = Bodies.circle(this.x, this.y, (this.r - 40) / 2, options)
		World.add(world, this.body);

	}
	display() {

		var paperpos = this.body.position;

		push()
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER)
		fill('black');
		ellipse(0, 0, (this.r) / 2, (this.r) / 2);
		fill('silver');
		ellipse(0, 0, (this.r) / 3, (this.r) / 3);
		fill('aliceblue');
		ellipse(0, 0, (this.r) / 6, (this.r) / 6);
		pop()

	}

}