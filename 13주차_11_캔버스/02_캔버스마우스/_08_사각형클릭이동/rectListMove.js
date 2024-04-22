function draw() {
    // 캔버스를 지운다. 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 캔버스를 다시 그린다.
    for(let i = 0; i < rectList.length; i++){
        drawRect(rectList[i]);
    }    
    
    for(let i = 0; i < rectList.length; i++){
        if(rectList[i].check == true){
            rectList[i].y += rectList[i].speed;

            if(rectList[i].y + rectList[i].height > canvas.height){
                rectList[i].y = originy;
                rectList[i].check = false;
                rectList[i].color = "blue";
            }
        }
    }

    let testText = document.querySelector(".testText");
    testText.innerHTML = ``;
    for(let i = 0; i < rectList.length; i++){
        testText.innerHTML += `x : ${rectList[i].x} y : ${rectList[i].y} width : ${rectList[i].width} height : ${rectList[i].height} <br>`;
        testText.innerHTML += `check : ${rectList[i].check}  <br>`;
    }

}

function drawRect(node){
    ctx.beginPath();
    ctx.rect(node.x, node.y, node.width, node.height);
    ctx.fillStyle = node.color;
    ctx.fill();
    ctx.closePath();
}


window.addEventListener('click', (event) => {

    let mx = event.clientX - ctx.canvas.offsetLeft;
    let my = event.clientY - ctx.canvas.offsetTop;

    for(let i = 0; i < rectList.length; i++){
        let x = rectList[i].x;
        let y = rectList[i].y;
        let width = rectList[i].width;
        let height = rectList[i].height;
        let check = rectList[i].check;
        if(check == false){
            if(x < mx && mx < x + width && y < my && my < y + height){
                rectList[i].check = true;
                rectList[i].color = "red";
            }
        }
        
    }
});
//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

let originx = 100;
let originy = 100;
let gap = 50;
let width = 50;
let height = 50;

let rectList = [];

for(let i = 0; i < 4; i++){

    let startx = originx + i * width + i * gap;
    let starty = originy;
    
    let myRect = {
        "x" : startx, 
        "y" : starty, 
        "width" : width, 
        "height" : height, 
        "color" : "blue",
        "speed" : 2,
        "check" : false,
    };
    rectList.push(myRect);
}

setInterval(draw, 10);


