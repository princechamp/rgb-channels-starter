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
        if (key=="g"){
            image(lpkidsgreen,0,0);
        }
        if (key=="b"){
            image(lpkidsblue,0,0);
        }
        if (keyCode=="32"){
            fill(0);
            rect(0,0,500,374);
            blendMode(LIGHTEST);
            image(lpkidsgreen,0,0);
            image(lpkidsred,0,0);
            image(lpkidsblue,0,0);
        }
    } 
    else {
        blendMode(NORMAL);
        image(lpkidsgray,0,0);
    }
    
}