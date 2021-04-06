class Drops{
    constructor(x,y,radius, restitution){
       var options={
           isStatic:false,
           restitution:restitution,
           friction:0.1
       }
       this.body = Matter.Bodies.circle(x,y,radius, options);
       this.x=x;
       this.y=y;
       this.radius=radius;
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var radius = this.body.radius;
        fill("BLUE");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 10);   
        if(this.body.position.y>500){
            Matter.Body.setPosition(this.body, {x:pos.x, y:pos.y});
          }
    }
}