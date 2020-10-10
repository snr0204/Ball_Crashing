class Log{

         constructor(x,y,w,h,c){

         var options={
             restitution:0.6,
             friction:0.1,
             isStatic:true
         }
        
         this.log=Bodies.rectangle(x,y,w,h,options)
         World.add(world,this.log); 
         this.widht=w;
         this.height=h;
         this.color=c;



         }

    display(){
      var pos=this.log.position;
      rectMode(CENTER)
      fill(this.color) 
      rect(pos.x,pos.y,this.widht,this.height) 
    }

}