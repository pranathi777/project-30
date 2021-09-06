class Box{
    constructor(x, y, width, height ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility = 200
      }
      display(){
        var pos = this.body.position
        
        if(this.body.speed<3){
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
      }else{
        World.remove(world,this.body)
        push();
        tint(200, this.Visiblity)
        pop();
      }
      }
}