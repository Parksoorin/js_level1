function init(size){
    for(let i = 0; i < size; i++){

        let originx = 100;
        let originy = 300;
        let gap = 100;
        let radius = 50;

        let startx = originx + i * radius + i * gap;

        let targetArc = {
            "x" : startx, 
            "y" : originy , 
            "radius" : radius, 
            "color" : "green"
        };

        targetList.push(targetArc);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 그리는 순서에 따라 먼저 그려진다. 
    for(let v of targetList){
        drawArc(v);
    }

    drawArc(myArc);
    moveArc(myArc);
    collisionList(myArc, targetList);
    
    $testText = document.querySelector(".testText");
    let temp = `${myArc.x} , ${myArc.y} <br><br>`;
    for(v of targetList){
       temp += `${v.x} , ${v.y} <br>`;
    }
    $testText.innerHTML = temp;
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

function collisionList(arc, arcList){
    let count = 0;
    for(let v of arcList){
        count += getArcInArc(myArc, v);
    }
    if(count == targetList.length){
        arc.color = "blue";
    }else{
        arc.color = "red";
    }
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
        return 0;
    }
    return 1;
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

let targetList = []
init(5);
setInterval(draw, 10);

