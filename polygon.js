class Polygon{
    constructor(x, y ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,10,10, options);
        World.add(world, this.body);
        this.image = loadImage("polygon.png")
        
      }
      
      display(){
        var pos = this.body.position

        imageMode(CENTER);
        image(this.image,pos.x, pos.y, 30,30);
      }
}