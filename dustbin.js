class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
     
     

      this.body1 = Bodies.rectangle(x,y,width,height,options);
      this.width = 0;
      this.height = 0;
      World.add(world,this.body1);
     
      this.body2 = Bodies.rectangle(x,y,width,height,options);
      this.width = 0;
      this.height = 0;
      World.add(world,this.body2);

      
      this.body3 = Bodies.rectangle(x,y,width,height,options);
      this.width =0;
      this.height = 0;
      this.image=loadImage("dustbingreen.png");
      World.add(world,this.body3);
  
    }
    display(){
      var pos =this.body3.position
       
      fill ("white");
      image(this.image,pos.x, pos.y, 100,100);
    }
  }