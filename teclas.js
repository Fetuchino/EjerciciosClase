//SETUP
function setup(){
    console.log("setup");
    createCanvas(400,400);
    
}

//LOOP
function draw(){
    console.log("draw - frameCount:" + frameCount);
    console.log("tecla: " + keyCode);
    clear();
    var x = 200;
    var y = 200;
    switch(keyCode) {
        case 38 :
            console.log("^");
            text("↑",x,y);
        break;
        
        case 40 :
            console.log("v");
            text("↓",x,y);
        break;

        case 37 :
            console.log("<");
            text("←",x,y);
        break;

        case 39 :
            console.log(">")
            text("→",x,y);
        break;
        
    }
}
//↓←→↑