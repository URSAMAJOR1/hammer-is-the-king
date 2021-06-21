class Stone {
    constructor(x, y) {
      var options = {
        'density':5,
        'friction': 5.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 40;
     this.image=loadImage("stone.png")
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      /*pos.x = mouseX;
      pos.y = mouseY;*/
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      // strokeWeight(3);
      // stroke('white')
      // fill('blakk')
      imageMode(CENTER)
      //rect(0, 0, this.width, this.height);
image(this.image,0,0,this.width,this.height)
      pop();
    };
  };
  