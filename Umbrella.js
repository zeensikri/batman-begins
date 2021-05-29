class Umbrella {
    constructor(x, y, r){
 
        var options = {
            isStatic:true
        }

        this.image = loadImage("Walking Frame/walking_1.png");

  
        this.body = Bodies.circle(x, y, r, options);

        this.r = r;
       
        this.x = x;
        this.y = y;

       
        
    
        World.add(world, this.body); 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        ellipseMode(CENTER);
        
      
        fill("black");

        ellipse(this.x, this.y, this.r, this.r);
        

        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
