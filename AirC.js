stats = "";
img = "";
objectDetector = "";
objects = ""
function preload(){
    img = loadImage("photo2(the_ac).jpg");
}
function setup(){
    canvas = createCanvas(900,500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}
function draw(){
    image(img,116,0,666,500);
    if(stats != ""){
        for (i = 0; i < objects.length; i++) {
            percent = floor(objects[i].confidence * 100);
            document.getElementById("status").innerHTML = "Status : Object(s) Detected";
            fill("#FF0000");
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x-10,objects[i].y-20,objects[i].width,objects[i].height);
        }
    }
}
function modelloaded(){
    console.log("cocossd loaded");
    objectDetector.detect(img,gotResults);
    stats = true;
}
function gotResults(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        result = objects;
    }
}