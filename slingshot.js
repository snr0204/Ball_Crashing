class slingshot{

    constructor (body1,point2){
        var options = {
            
            bodyA : body1,
            pointB : point2,
            length : 5,
            stiffnes : 0.06


        }
this.pointB = point2
this.image1 = loadImage("sprites/sling1.png")
this.image2 = loadImage("sprites/sling2.png")
this.image3 = loadImage("sprites/sling3.png")

this.sling = Constraint.create (options)
World.add(world,this.sling)
    }
    display(){
     
         image(this.image1,200,22);
         image(this.image2,170,22);
        
 

        if(this.sling.bodyA !==null){
           var posA = this.sling.bodyA.position
           var posB = this.pointB
    
strokeWeight(7)
stroke(48,22,8)
        line(posA.x-20,posA.y+2,posB.x+15,posB.y)
        line(posA.x-20,posA.y+2,posB.x-15,posB.y-3)
        image(this.image3,posA.x-25,posA.y-10,15,30)

        }
    }
    fly(){
this.sling.bodyA = null
    }  
}
