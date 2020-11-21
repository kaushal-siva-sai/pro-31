class Plinko{
    constructor(x,y,width,height){
      var options={
        isStatic:true
      }
    this.body = Bodies.rect(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
display(){
    var pos = this.body.position;
    fill("white");
    stroke("yellow");
    push();
    translate(pos.x,pos.y);
    ellipse(0, 0, this.width, this.height);
    pop();
}
}