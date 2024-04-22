function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    drawRect(targetRect)
    drawRect(myRect);
    moveRect(myRect);

    let check = getRectInRect(myRect, targetRect);
    if(check){
        myRect.color = "red";
    }else{
        myRect.color = "blue";
    }
}

function drawRect(rect){
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.fillStyle = rect.color;
    ctx.fill();
    ctx.closePath();
}

function moveRect(rect){
    if(getKeyStay("left")){
        rect.x -= rect.speed;
    }
    if(getKeyStay("right")){
        rect.x += rect.speed;
    }
    if(getKeyStay("up")){
        rect.y -= rect.speed;
    }
    if(getKeyStay("down")){
        rect.y += rect.speed;
    }
}

function getRectInRect(r1, r2){
    let left1 = r1.x;
    let right1 = r1.x + r1.width;
    let top1 = r1.y;
    let bottom1 = r1.y + r1.height;

    let left2 = r2.x;
    let right2 = r2.x + r2.width;
    let top2 = r2.y;
    let bottom2 = r2.y + r2.height;

    if(left1 < right2 && right1 > left2 && top1 < bottom2 && bottom1 > top2){
        return true;
    }
    return false;
}

//-------------------------------------------------

function getKeyStay(key){ 
    return keyStay[key];
}

window.addEventListener("keydown", (e) => {
    if(e.code == 'KeyD') {         
        keyStay.right = true;
    }
    if(e.code == 'KeyA') {  
        keyStay.left = true;
    }
    if(e.code == 'KeyW') {   
        keyStay.up = true;
    }
    if(e.code == 'KeyS') { 
        keyStay.down = true;
    }
  
});

window.addEventListener("keyup", (e) => {
    if(e.code == 'KeyD') {        
        keyStay.right = false;
    }
    if(e.code == 'KeyA') {   
        keyStay.left = false;
    }
    if(e.code == 'KeyW') {    
        keyStay.up = false;
    }
    if(e.code == 'KeyS') {  
        keyStay.down = false;
    }
   
});

//----------------------------------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

let keyStay = {"right" : false , "left" : false, "up" : false, "down" : false};

let myRect = {
    "x" : 100, 
    "y" : 100, 
    "width" : 50, 
    "height" : 50, 
    "speed" : 2,
    "color" : "blue"
};

let targetRect = {
    "x" : 180, 
    "y" : 180, 
    "width" : 80, 
    "height" : 80, 
    "color" : "green"
};

setInterval(draw, 10);
