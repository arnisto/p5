var  lat = 0.0;
var  lon = 0.0	;
var angle = 0;
let earth;
let globe;
var r = 200;
function setup(){
    earth = loadImage("earth.jpg");
    createCanvas(600, 600, WEBGL);
    //globe = createShape(SPHERE,r);
    
}
function draw(){
  background(51);
  //translate(width*0.5,height*0.5);
  rotateY(angle);
  angle += 0.05;
  lights();
  fill(200);
  noStroke();
  push();
  texture(earth);

  sphere(r);
  pop();
  var phi = radians(lat) + PI/2;
  var theta = radians(lon) + PI;
  var x = r * sin(theta) * cos(phi)-50;
  var y = -r * sin(theta) * sin(phi)-170;
  var z = r * cos(theta)+10;

  let pos = new createVector(x,y,z);
  let xaxis = new createVector(1,0,0);
  let angleb = pos.angleBetween(xaxis);

  let raxis =xaxis.cross(pos);
  push();
  translate(x,y,z);
  rotate(angleb,raxis);
  //fill(255);
  box(100,10,10);
  pop();
}