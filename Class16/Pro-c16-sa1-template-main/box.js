class Box
  {
    constructor()
    {
      this.x =100;
      this.y = 200
      this.www = 50;
      this.h = 50;
    }
    
    show()
    {
      console.log("hello"+this.x+" "+this.y+" "+this.www+" "+this.h)
      rect(this.x,this.y,this.www,this.h)
    }
    
    //write function to set the width of the box
    set_width(v){
      this.www = v
    }
    set_velocity(y){
      this.x = y+this.x
    }

  }

  
