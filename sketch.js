const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;


function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(750,325,240,20);

    //level 1
    b1 = new Box(750,295,30,30);
    b5 = new Box(785,295,30,30);
    b6 = new Box(820,295,30,30);
    //b7 = new Box(855,295,30,30);
    b8 = new Box(715,295,30,30);
    b9 = new Box(680,295,30,30);
    //b10 = new Box(645,295,30,30);
    //level 2
    b2 = new Box(750,265,30,30);
    b11 = new Box(785,265,30,30);
    b12 = new Box(820,265,30,30);
    b13 = new Box(715,265,30,30);
    b14 = new Box(680,265,30,30);
    //level 3
    b3 = new Box(750,235,30,30);
    b15 = new Box(785,235,30,30);
    b16= new Box(715,235,30,30);
    //level 4 
    b4 = new Box(750,205,30,30);

    polygon = new Polygon(100,300);

    
    sling = new SlingShot(polygon.body,{x:297,y:250})




}

function draw(){
    background(54,252,159);
    Engine.update(engine);

    stand.display();

    fill(255,49,211)
    b1.display();
    b5.display();
    b6.display();
    //b7.display();
    b8.display();
    b9.display();
    //b10.display();
    fill(147,35,209)
    b2.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    fill(72,35,209)
    b3.display();
    b15.display();
    b16.display();
    fill(47,154,208)
    b4.display();

    polygon.display();

    sling.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon.body)
    }
}






