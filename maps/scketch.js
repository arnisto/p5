var maping;
var clat = 0;
var clon = 0;
var lat = 31.2304;
var lon = 121.4737;
var zoom = 1;
var earthquakes;
var jsondata;

function preload(){
    maping = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1/1024x512?access_token=pk.eyJ1IjoibGFtamVkIiwiYSI6ImNraDVjNGNzejAwbmQyenBoaW54NDR6bXkifQ.nkCxdwoXYaIx9ssRTOCtQw');
    earthquakes =loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
    
    
}

function mercX(lon){
    lon = radians(lon);
    var a = (256/PI) * pow(2, zoom);
    var b =lon + PI;
   return a * b;
}
function mercY(lat){
    lat = radians(lat);
    var a = (256/PI) * pow(2, zoom);
    var b =tan(PI/4 + lat/2);
    var c = PI-log(b);
    return a*c ;
}



function setup(){
    createCanvas(1024,512);
    translate(width/2,height/2);
    imageMode(CENTER);
    image(maping,0,0);

    var cx = mercX(clon);
    var cy = mercY(clat);

    for(var i=0;i<earthquakes.length;i++){
        var data = earthquakes[i].split(/,/);
        
       
    }
    console.log(earthquakes[10]);
    
}
function deaw(){

}