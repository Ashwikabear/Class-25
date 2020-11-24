class Trashcan{

constructor(x,y,width,height){
     
        var options = {
            isStatic:true,
            friction:1,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y,width,height, options);
        this.width= width;
        this.height=height;
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body)
        
    }
        display(){
        fill("blue")
      var pos = this.body.position
      push()
     rectMode(CENTER)
     rect(pos.x,pos.y,this.width,this.height)
     
       

    pop()
        }

        


}




    
