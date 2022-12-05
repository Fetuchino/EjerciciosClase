//SETUP
function setup(){
    console.log("setup");
    createCanvas(550,550);
    background(200);
}
//LOOP
function draw(){
    console.log("draw" + frameCount);

    /*
    var i = 50;
    var x = 50;
    fill(color(frameCount%255));

    while(x < height-25){

        while(i < width-25){
            ellipse(i, x, 25, 25);
            i = i+50;
        }
        x = x+50;
        i = 50;
    }
    */
   y = 50
    for(var x=1; x < 10; x++){
        for(var y=1; y < 10; y++){
            ellipse(x*30, y*30, 25, 25);
        }
        
    }


}