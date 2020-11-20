class Ball {

    constructor(x,y,r) {

    var options = {

        density: 1, 
        frictionAir: 0.005

    }

    this.r = r;
    this.body = Bodies.circle(x,y,r);
    World.add(world, this.body);
    

    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
    }