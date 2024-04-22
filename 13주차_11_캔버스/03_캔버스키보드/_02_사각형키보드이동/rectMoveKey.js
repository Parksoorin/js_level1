function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawRect();

    moveRect();

}

function drawRect(){
    ctx.beginPath();
    ctx.rect(myRect.x, myRect.y, myRect.width, myRect.height);
    ctx.fillStyle = myRect.color;
    ctx.fill();
    ctx.closePath();
}

function moveRect(){
    if(key.right){
        myRect.x += myRect.speed;
    }
    if(key.left){
        myRect.x -= myRect.speed;
    }
    if(key.up){
        myRect.y -= myRect.speed;
    }
    if(key.down){
        myRect.y += myRect.speed;
    }
}

//-------------------------------------------------

// {} JSON은 . 으로 사용할수도있고, [] 로 사용할수도있다.
window.addEventListener("keydown", (e) => {
    if(e.code == 'KeyD') {        
        key.right = true;
        // key["right"] = true;
    }
    else  if(e.code == 'KeyA') {   
        key.left = true;
        // key["left"]  = true;
    }
    else if(e.code == 'KeyW') {    
        key.up = true;
        // key["up"] = true;
    }
    else  if(e.code == 'KeyS') {  
        key.down = true;
        //key["down"]  = true;
    }
    console.log(e.code);
});

window.addEventListener("keyup", (e) => {
    if(e.code == 'KeyD') {       
       // key["right"] = false;
        key.right = false;
    }
    else  if(e.code == 'KeyA') {   
       // key["left"]  = false;
        key.left = false;
    }
    else if(e.code == 'KeyW') {    
       // key["up"] = false;
        key.up = false;
    }
    else if(e.code == 'KeyS') {   
        //key["down"]  = false;
        key.down = false;
    }
});

//----------------------------------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

let key = { "right" : false, "left" : false, "up" : false, "down" : false};
let myRect = {
    "x" : 100, 
    "y" : 100, 
    "width" : 50, 
    "height" : 50, 
    "speed" : 2,
    "color" : "blue"
};
setInterval(draw, 10);
