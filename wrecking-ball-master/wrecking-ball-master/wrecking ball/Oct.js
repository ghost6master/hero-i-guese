class Oct {
    constructor(x,y,width,height) {
        this.image = loadImage("squido.png");
        var options = {
            isStatic: true
        }
        
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

World.add(world, this.body);
}
display(){
      
  fill("pink")
    var pos =this.body.position;
    rect(pos.x, pos.y, this.width, this.height);
  }
}