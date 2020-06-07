class Division{
     constructor(x,y){
          var options = {
               isStatic:true
          }
          this.body = Bodies.rectangle(x,y,10,100,options);
          World.add(world,this.body);
     }

     display(){

      var pos = this.body.position;
      rectMode(CENTER);
      fill("White");
      rect(pos.x, pos.y, 10, 100);
          
     }
}