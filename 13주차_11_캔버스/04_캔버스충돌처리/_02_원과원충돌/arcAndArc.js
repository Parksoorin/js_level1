function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 그리는 순서에 따라 먼저 그려진다. 
    // targetArc를 먼저 그렸기 때문에 
    // 서로 겹쳤을 때, myArc가 위로 그려진다.
    drawArc(targetArc);
    drawArc(myArc);
    moveArc(myArc);

    getArcInArc(myArc, targetArc);
}

function getArcInArc(arc1, arc2){
    let x1 = arc1.x;
    let y1 = arc1.y;
    let radius1 = arc1.radius;

    let x2 = arc2.x;
    let y2 = arc2.y;
    let radius2 = arc2.radius;

    let hypotenusePow = Math.abs((x1-x2) * (x1-x2) + (y1-y2) * (y1-y2));
    let hypotenuse = Math.sqrt(hypotenusePow);
    let totalRadius = radius1 + radius2;
    
    if(hypotenuse <= totalRadius){
        arc1.color = "red"
    }else{
        arc1.color = "blue"
    }
}

function drawArc(arc){
    ctx.beginPath();
    ctx.arc(arc.x, arc.y, arc.radius, 0, Math.PI * 2);
    ctx.fillStyle = arc.color;
    ctx.fill();
    ctx.closePath();
}

function moveArc(arc){
    if(getKeyStay("left")){
        arc.x -= arc.speed;
    }
    if(getKeyStay("right")){
        arc.x += arc.speed;
    }
    if(getKeyStay("up")){
        arc.y -= arc.speed;
    }
    if(getKeyStay("down")){
        arc.y += arc.speed;
    }
    
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

let keyStay = {"right" : false, "left" : false, "up" : false, "down" : false};

let myArc = {
    "x" : 100, 
    "y" : 100, 
    "radius" : 40, 
    "speed" : 2,
    "color" : "blue"
};

let targetArc = {
    "x" : 300, 
    "y" : 300, 
    "radius" : 60, 
    "color" : "green"
};

setInterval(draw, 10);