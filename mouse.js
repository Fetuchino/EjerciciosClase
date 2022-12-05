var color = 0
//SETUP
function setup(){
    console.log("setup");
    createCanvas(200,200);
}
//LOOP
function draw(){
    console.log("draw - frameCount:" + frameCount);
    console.log("mouseX: " + mouseX + ", mouseY: " + mouseY);
    clear();
    background(125);
    if(mouseX<100 && mouseY<100){
        fill(color('green'));
    }else if(mouseX>100 && mouseY<100){
        fill(color('red'));
    }else if(mouseX<100 && mouseY>100){
        fill(color('blue'));
    }else{
        fill(color('yellow'));
    }

    ellipse(mouseX,mouseY,50,50);
}