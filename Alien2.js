class alien extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/alien.jpg");
    Matter.Body.setAngle(this.body, angle);
  }

display(){

   super.display();
  }

}