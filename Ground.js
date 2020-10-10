class  Ground{

constructor (){
    var options={
        isStatic:true
    }
     
    this.obj=Bodies.rectangle(400,370,800,30,options)
    World.add(world,this.obj);
   
}
    display(){
    var pos=this.obj.position;
    rectMode(CENTER)
    
    rect(pos.x,pos.y,800,30)

}
}
