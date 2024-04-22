function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect(myRect);
    changeColor(myRect);
}

function drawRect(rect){
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.fillStyle = rect.color;
    ctx.fill();
    ctx.closePath();
}

function getPointInRect(x, y, rc){
    let left = rc.x;
    let right = rc.x + rc.width;
    let top = rc.y;
    let bottom = rc.y + rc.height;
    if(left < x && x < right && top < y && y < bottom){
        return true;
    }
    return false;
}

function changeColor(rect){
    if(rect.state == "none"){
        rect.color = "blue";
    }else if(rect.state == "over"){
        rect.color = "red";
    }else if(rect.state == "click"){
        rect.color = "green"
    }
}

//-------------------------------------------------
/*
    mousedown : 마우스 클릭할 때
    mousemove : 마우스가 움직일 때
    mouseup : 마우에서 손을 뗄 때
*/

window.addEventListener("mousedown", (event) => {
    let mx = event.clientX - ctx.canvas.offsetLeft;
    let my = event.clientY - ctx.canvas.offsetTop;
    if(getPointInRect(mx, my, myRect)){
        myRect.state = "click";
        myRect.gapX = mx - myRect.x;
        myRect.gapY = my - myRect.y;
    }
});

window.addEventListener("mousemove", (event) =>{
    let mx = event.clientX - ctx.canvas.offsetLeft;
    let my = event.clientY - ctx.canvas.offsetTop;
    if(myRect.state == "click"){
        myRect.x = mx - myRect.gapX;
        myRect.y = my - myRect.gapY;
        return;
    }
    
    if(getPointInRect(mx, my, myRect)){
        myRect.state = "over";
    }else{
        myRect.state = "none";
    }
});

window.addEventListener("mouseup", (event) => {
    let mx = event.clientX - ctx.canvas.offsetLeft;
    let my = event.clientY - ctx.canvas.offsetTop;
    if(getPointInRect(mx, my, myRect)){
        myRect.state = "over";
    }else{
        myRect.state = "none";
    }
});

//----------------------------------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

let myRect = {
    "x" : 100, 
    "y" : 100, 
    "width" : 150, 
    "height" : 150, 
    "color" : "blue",
    "state" : "none", // none, over, click
    "gapX" : 0,
    "gapY" : 0
};

setInterval(draw, 10);

