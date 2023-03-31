stats = "";
img = "";
objectDetector = "";
function preload(){
    img = loadImage("photo1.jpg");
}
function setup(){
    canvas = createCanvas(900,500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}
function draw(){
    image(img,200,0,500,500);
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
    }
}