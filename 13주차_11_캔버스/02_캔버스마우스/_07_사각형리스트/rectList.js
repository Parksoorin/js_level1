function draw() {
    // 캔버스를 지운다. 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 캔버스를 다시 그린다.
    for(let i = 0; i < rectList.length; i++){
        drawRect(rectList[i]);
        drawText(rectList[i]);
    }   
}

function drawRect(node){
    ctx.beginPath();
    ctx.rect(node.x, node.y, node.width, node.height);
    ctx.fillStyle = node.color;
    ctx.fill();
    ctx.closePath();
}

function drawText(node){
    ctx.font ="25px Fira";
    ctx.fillStyle = "white";
    ctx.fillText(node.number, node.x + 8, node.y + 28);
}

window.addEventListener('click', (event) => {
   
    let mx = event.clientX - ctx.canvas.offsetLeft;
    let my = event.clientY - ctx.canvas.offsetTop;

    let testText = document.querySelector(".testText");
    testText.innerHTML = ``;
    testText.innerHTML += `mx  : ${my} <br>`;
    testText.innerHTML += `my : ${my} <br>`;

    for(let i = 0; i < rectList.length; i++){
        let x = rectList[i].x;
        let y = rectList[i].y;
        let width = rectList[i].width;
        let height = rectList[i].height;

        if(x < mx && mx < x + width && y < my && my < y + height){
            rectList[i].number = gameNumber;
            gameNumber += 1;      
        }

        // 출력
        testText.innerHTML += `x : ${x} y : ${y} width : ${width} height : ${height}<br>`;
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
        "number" : 0,
        "color" : "blue",
    };
    rectList.push(myRect);
}
let gameNumber = 1;

setInterval(draw, 10);



