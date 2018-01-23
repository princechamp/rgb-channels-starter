var lpkidsred;
var lpkidsgreen;
var lpkidsblue;
var lpkidsgray;

function preload(){
    lpkidsgray = loadImage("images/lpkids-gray.png")
    lpkidsblue = loadImage("images/lpkids-blue.png")
    lpkidsgreen = loadImage("images/lpkids-green.png")
    lpkidsred = loadImage("images/lpkids-red.png")
    
}

function setup(){
    createCanvas(500,374);
    
}

function draw(){
    if (keyIsPressed) {
        if(key=="r"){
            image(lpkidsred,0,0);
        }
    } 
    else {
        image(lpkidsgray,0,0);
    }
    
}