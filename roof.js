class roof {
    constructor(x, y, w) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, 50, options);
        World.add(world, this.body);
        this.x = x;
        this.y = y;
        this.w = w;
    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER)
        fill(128, 128, 128)
        rect(0, 0, this.w, 50);
        pop()
    }
}