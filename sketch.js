//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//to create engine, world and polygon 
var engine, world;
var polygon;

//to preload the image
function preload(){

    polygonImg = loadImage("polygon.png");
    
}

function setup(){

    //to create the canvas
    var canvas = createCanvas(1200,400);

    //to create engine and world
    engine = Engine.create();
    world = engine.world;

    //polygon 
    polygon = Bodies.circle(200, 200, 30/2, {friction : 1, density : 1});
    World.add(world, polygon);

    //stands
    stand1 = new Ground(600, 350, 250, 10);
    stand2 = new Ground(900, 245, 200 ,10);

    //ground
    ground = new Ground(600, height, 1200, 30);

    //pyramid 1
    //level 1
    block1 = new Block(510, 325, 30, 40, "lightBlue");
    block2 = new Block(540, 325, 30, 40, "lightBlue");
    block3 = new Block(570, 325, 30, 40, "lightBlue");
    block4 = new Block(600, 325, 30, 40, "lightBlue");
    block5 = new Block(630, 325, 30, 40, "lightBlue");
    block6 = new Block(660, 325, 30, 40, "lightBlue");
    block7 = new Block(690, 325, 30, 40, "lightBlue");

    //level 2
    block8 = new Block(540, 285, 30, 40, "pink");
    block9 = new Block(570, 285, 30, 40, "pink");
    block10 = new Block(600, 285, 30, 40, "pink");
    block11 = new Block(630, 285, 30, 40, "pink");
    block12 = new Block(660, 285, 30, 40, "pink");

    //level 3 
    block13 = new Block(570, 245, 30, 40, "lightGreen");
    block14 = new Block(600, 245, 30, 40, "lightGreen");
    block15 = new Block(630, 245, 30, 40, "lightGreen");

    //level 4
    block16 = new Block(600, 205, 30, 40, "grey");

    //pyramid 2
    //level 1
    block17 = new Block(840, 220, 30, 40, "lightBlue");
    block18 = new Block(870, 220, 30, 40, "lightBlue");
    block19 = new Block(900, 220, 30, 40, "lightBlue");
    block20 = new Block(930, 220, 30, 40, "lightBlue");
    block21 = new Block(960, 220, 30, 40, "lightBlue");

    //level 2
    block22 = new Block(870, 180, 30, 40, "lightGreen");
    block23 = new Block(900, 180, 30, 40, "lightGreen");
    block24 = new Block(930, 180, 30, 40, "lightGreen");

    //level 3
    block25 = new Block(900, 140, 30, 40, "pink");

    //slingshot
    slingshot = new SlingShot(this.polygon,{x:100, y:200});

   

}    

function draw(){

    //to give background
    background("black");

    //to update the engine
    Engine.update(engine);

    //to display the text
    textSize(25);
    fill("lightYellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.", 20, 50);

    //to display the game objects
    stand1.display();
    stand2.display();
    ground.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();

    //to display the slingshot 
    slingshot.display();

    //to create polygon 
    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 30*2, 30*2);

}

function mouseDragged(){

    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});

}


function mouseReleased(){

    slingshot.fly();

}