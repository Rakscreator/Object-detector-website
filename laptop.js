stats = "";
img = "";
objectDetector = "";
objects = ""
function preload(){
    img = loadImage("Photo1.jpg");
}
function setup(){
    canvas = createCanvas(900,500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}
function modelloaded(){
    console.log("cocossd loaded");
    objectDetector.detect(img,gotResults);
    stats = true;
}
function draw(){
    image(img,75,0,750,500);
    if(stats != ""){
        for (i = 0; i < objects.length; i++) {
            percent = floor(objects[i].confidence * 100);
            document.getElementById("status").innerHTML = "Status : Object(s) Detected";
            fill("#FF0000");
            text(objects[i].label+" "+percent+"%",objects[i].x+110,objects[i].y+40);
            noFill();
            stroke("#FF0000");
            console.log("drawing object");
            rect(objects[i].x+110,objects[i].y+40,objects[i].width,objects[i].height);
        }
    }
}
function gotResults(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        objects = result;
    }
}
