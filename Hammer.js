class Hammer {
  constructor(x, y) {
    var options = {
      'density':5,
      'friction': 5.0,
      'restitution':0.5
    };
    this.body = Bodies.rectangle(x, y, 150, 150, options);
    this.width = 150;
    this.height = 150;
    this.image=loadImage("thor.png")
    World.add(world, this.body);

  };
  display(){

    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    imageMode(CENTER)
    //rect(0, 0, this.width, this.height);
    image(this.image,0,0,this.width,this.height)
    pop();
  };
};
