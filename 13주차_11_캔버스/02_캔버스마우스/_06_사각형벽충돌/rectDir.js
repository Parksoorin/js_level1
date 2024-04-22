function draw() {
    // 캔버스를 지운다. 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 캔버스를 다시 그린다.
    drawRect(); 

    //이동제어
    if(dir == "east"){
        x += speed ;
    }else if(dir == "west"){
        x -= speed;
    }

    //충돌제어
    if(x >= canvas.width - width){
        dir ="west";
    }
    else if(x < 0){
        dir ="east";
    }

    let testText = document.querySelector(".testText");
    testText.innerHTML = ``;
    testText.innerHTML += `x  : ${x} <br>`;
    testText.innerHTML += `y  : ${y} <br>`;
    testText.innerHTML += `dir  : ${dir} <br>`;
    testText.innerHTML += `speed : ${speed} <br>`;
}

function drawRect(){
    ctx.beginPath();

    ctx.rect(x, y, width, height);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.closePath();
}

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

let x = 0;
let y = 0;
let dir = "east";
let width = 100;
let height = 100;
let speed = 2;

setInterval(draw, 10);