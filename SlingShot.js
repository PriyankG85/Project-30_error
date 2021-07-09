class SlingShot {
    constructor(bodyA, bodyB, offsetX, offsetY) {

        this.x = offsetX;
        this.y = offsetY;
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x: this.x, y: this.y},
            // stiffness : 0.04,
            // length : 10
        }
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    display() {
        var sp = this.Slingshot.bodyA.position;
        var ep = this.Slingshot.bodyB.position;
        strokeWeight(2);
        line(sp.x+this.x, sp.y+this.y, ep.x, ep.y);
    }
}