class Box{

  constructor(x,y,w,h,c){
      
    var options={
          restitution:0.6,
          friction:0.1
          

      }
       
      this.obj=Bodies.rectangle(x,y,w,h,options)
      World.add(world,this.obj);
      this.width=w;
      this.height=h;
      this.color=c;


  }
  
  display(){
     var pos=this.obj.position;
     rectMode(CENTER)
     fill(this.color)
     rect(pos.x,pos.y,this.width,this.height)

  }

}

