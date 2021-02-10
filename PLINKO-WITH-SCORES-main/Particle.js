class Particle{
    constructor(x,y){
        var options={
            restitution:0.4
        }
        this.r=12;
        this.body=Bodies.circle(x,y,this.r,options);
        this.colour=color(random(0,225),random(0,225),random(0,225));
        World.add(world,this.body);
    }
    if(particle!=null)
    {
        particle.display();

        if (particle.body.position.y>760)
        {
            if(particle.body.position.x < 300)
            {
                score=score+500;
                particle=null;
                if(count>= 5) gameState ="end";
            }
        }
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        //ImageMode(CENTER)
        noStroke()
        fill(this.colour)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
};

