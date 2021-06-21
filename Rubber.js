class Rubber {
	constructor(x,y,r)
	{
		var options = {
			'density':0.3,
			'friction': 5.0,
			'restitution':0.9 }
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
this.image=loadImage("rubber.jpg")


		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			imageMode(CENTER)
			strokeWeight(3);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
		// ellipse(0,0,this.r,this.r)
		 image(this.image, 0, 0, this.r, this.r)
			pop()
	}

}