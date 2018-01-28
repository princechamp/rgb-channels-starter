var lpkidsred;
var lpkidsgreen;
var lpkidsblue;
var lpkidsgray;

function preload(){
    lpkidsgray = loadImage("images/lpkids-gray.png")
    lpkidsblue = loadImage("images/lpkids-blue.png")
    lpkidsgreen = loadImage("images/lpkids-green.png")
    lpkidsred = loadImage("images/lpkids-red.png")
    television = loadImage("images/oldtv.png")
    
}

function setup(){
    createCanvas(749,524);
    
}

function draw(){
    if (keyIsPressed) {
        if(key=="r"){
            image(lpkidsred,50,50);
        }
        if (key=="g"){
            image(lpkidsgreen,50,50);
        }
        if (key=="b"){
            image(lpkidsblue,50,50);
        }
        if (keyCode=="32"){
            fill(0);
            rect(50,50,500,374);
            blendMode(LIGHTEST);
            image(lpkidsgreen,50,50);
            image(lpkidsred,50,50);
            image(lpkidsblue,50,50);
        }
    } 
    else {
        blendMode(NORMAL);
        image(lpkidsgray,50,50);
        image(television,0,0);
    }
     
}