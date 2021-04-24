class Dustbin {
    constructor(x, y) {
      var options = {
          isStatic:true
      }
      this.x = x;
      this.y = y;
      
      this.left = Bodies.rectangle(this.x + 90, this.y - 50, 20, 100,options);
      this.image = loadImage('dustbingreen.png')
      
      World.add(world, this.left);
    }
  
    display() {
      imageMode(CENTER)
      noStroke();
      fill(255);
      
      image(this.image, this.left.position.x, 600, 200, 200);
      
  
    }
}
