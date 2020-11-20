class Box {
    constructor(x,y) {

    var options = {

        restitution: 0.8,
        friction: 1,
        density: 0.04

    }

    
    this.body = Bodies.rectangle(x,y,70,70);
    this.width = 70;
    this.height = 70;
    World.add(world,this.body);

}

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();

        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lightgreen");
        rect(0,0,50,50);

        pop();


    }


}