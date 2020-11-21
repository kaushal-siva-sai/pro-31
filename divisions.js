class Divisions{
    constructor(width,height,x,y){
      var options={
          isStatic:true
      }
    this.bodies = Bodies.rectangle(width,height,x,y,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
   
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("aquamarine");
    rect(pos.x,pos.y,this.width,this.height);
 }
}