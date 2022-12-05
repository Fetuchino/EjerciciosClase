var color = 0
//SETUP
function setup(){
    console.log("setup");
    
    createCanvas(200,200);
    background(255,100,0);

}
//LOOP
function draw(){
    console.log("draw - frameCount:" + frameCount);
        var red = document.getElementById("R").value;
        var green = document.getElementById("G").value;
        var blue = document.getElementById("B").value;
        background(red,green,blue);
        rect(125,125,50,50);
        fill(100,200,5);
        ellipse(100,100,50,50);
        fill(255,100,0);
}
