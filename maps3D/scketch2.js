 function Star( x,y,z)  {
    
    this.x = x,
    this.y = y,
    this.z = z,

    this.pz = this.z,
    
    this.update = function(){
        this.z = this.z - 10;
        if(this.z<1){
            this.z = 400;
            this.x = random(-400,400);
            this.y = random(-400,400);
            this.pz = this.z;
        }
    },
    this.show = function(){
        fill(255);
        noStroke();

       var sx = map(this.x/this.z,0,1,0,width);
       var sy = map(this.y/this.z,0,1,0,height);
       
       var px = map(this.x/this.pz,0,1,0,width);
       var py = map(this.y/this.pz,0,1,0,height);
       
       this.pz = this.z;

       var r = map(this.z,0,400,16,0);
        ellipse(sx,sy,r,r);

        stroke(255);
        line(px,py,sx,sy);

        

    }
}
var stars = [];
function setup(){
    createCanvas(600, 600);
    for(var i=0;i<1000;i++){
        stars.push(new Star(random(-400,400),random(-400,400),random(400)));
    }

}
function draw(){
   background(0);
   translate(width/2, height/2);
   for (var i=0;i<stars.length;i++){
       stars[i].update();
       stars[i].show();
   }
  
}