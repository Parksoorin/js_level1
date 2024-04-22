function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawArc(targetArc)
    drawRect(myRect);
    moveRect(myRect);

    let check = collisionRectAndArc(myRect, targetArc);
    if(check){
        myRect.color = "red";
    }else{
        myRect.color = "blue";
    }

    //-------------------------------------------------------
    
    // 이해를 돕기 위해 원의 중앙 점을 노란색으로 표시
    ctx.beginPath();
    ctx.arc(targetArc.x, targetArc.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    // 이해를 돕기 위해 사각형 가이드 선 표시
    let tempRect = {
        x : myRect.x - targetArc.radius,
        y : myRect.y - targetArc.radius,
        width : myRect.width + targetArc.radius * 2,
        height : myRect.height + targetArc.radius * 2
    };
    ctx.beginPath();
    ctx.rect(tempRect.x, tempRect.y, tempRect.width, tempRect.height);
    ctx.stroke();
    ctx.closePath();
    
}

function drawArc(arc){
    ctx.beginPath();
    ctx.arc(arc.x, arc.y, arc.radius, 0, Math.PI * 2);
    ctx.fillStyle = arc.color;
    ctx.fill();
    ctx.closePath();
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

function getPointInRect(arcX, arcY, rect){
    let left = rect.x;
    let right = rect.x + rect.width;
    let top = rect.y;
    let bottom = rect.y + rect.height;
 
    if(left < arcX && arcX < right && top < arcY && arcY < bottom ){
        return true;
    }
    return false;
}

function getPointInArc(x, y, arc){
    
    let hypotenusePow = Math.abs((x - arc.x) * (x - arc.x) + (y - arc.y) * (y -arc.y));
    let hypotenuse = Math.sqrt(hypotenusePow);
    if(hypotenuse <= arc.radius){
        return true;
    }
    return false;
}

function collisionRectAndArc(rect, arc){
    // [조건1] 원의 반지름 만큼 사각형을 네방향으로 확장한 후, 
    // 원의 중심점이 그 사각형 안에 있다면 충돌
    let tempRect = {        // 가이드 사각형 크기설정
        x : rect.x - arc.radius,
        y : rect.y - arc.radius,
        width : rect.width + arc.radius * 2,
        height : rect.height + arc.radius * 2
    };

    // 원의 중앙점이 가이드 사각형의 1, 3번 안에 있는지 확인
    if((rect.x < arc.x && arc.x < rect.x + rect.width) 
        // 또는 원의 중앙점이 가이드 사각형의 2, 4번 안에 있는지 확인
        || (rect.y < arc.y && arc.y < rect.y + rect.height)) {
        // 원의 중앙점이 1, 2, 3, 4번에 있는지 확인
        if(getPointInRect(arc.x, arc.y, tempRect)){
            return true;
        }
    }

    // [조건2] 예외적으로 대각선 쪽으로 왔을땐 사각형 꼭지점들이 
    // 원 안에 있는지 확인(점-원 충돌)
    if(getPointInArc(rect.x, rect.y, arc)){
        return true;
    }

    if(getPointInArc(rect.x + rect.width, rect.y, arc)){
        return true;
    }

    if(getPointInArc(rect.x, rect.y + rect.height, arc)){
        return true;
    }

    if(getPointInArc(rect.x + rect.width, rect.y + rect.height, arc)){
        return true;
    }

    // 찾는 값이 있으면 화면에 띄우면서 찾는다. 
    $testText = document.querySelector(".testText");
    let temp = `체크 사각형 : ${tempRect.x} , ${tempRect.y} , ${tempRect.width} , ${tempRect.height} <br><br>`;
    temp += `원본 사각형 : ${rect.x} , ${rect.y} , ${rect.width} , ${rect.height} <br><br>`;
    temp += `원 : ${arc.x} , ${arc.y}, ${arc.radius} <br><br>`;
    $testText.innerHTML = temp;

    return false;
}
//----------------------------------------------------------------

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

let myRect = {
    "x" : 80, 
    "y" : 80, 
    "width" : 50, 
    "height" : 50, 
    "speed" : 2,
    "color" : "blue"
};

let targetArc = {
    "x" : 200, 
    "y" : 200, 
    "radius" : 80, 
    "color" : "green"
};

setInterval(draw, 10);
