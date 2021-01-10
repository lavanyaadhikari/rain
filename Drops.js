class Rain{

    constructor(x,y){
      
        var options = {
            friction: 0.2,
            isSatic: false
        }

        this.rain = Bodies.rectangle(x,y,10,10,options);
        World.add(world, this.rain);
    }

    display(){
        var angle = this.rain.angle;
        push();
        translate(this.rain.position.x, this.rain.position.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS)
        ellipse(this.rain.position.x, this.rain.position.y, 10,10,10);
        pop();
    }
}