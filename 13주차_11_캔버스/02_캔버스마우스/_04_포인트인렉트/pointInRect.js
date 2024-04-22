function draw() {
    // 캔버스를 지운다. 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 캔버스를 다시 그린다.
    drawRect(); 
}

function drawRect(){
    ctx.beginPath();

    ctx.rect(x, y, width, height);
    ctx.fill();
    if(check){
        ctx.fillStyle = "red";
    }else{
        ctx.fillStyle = "blue";
    }
    ctx.closePath();
}

window.addEventListener("click", (event) => {

    // 캔버스가 화면 왼쪽 상단에서 일정간격 벗어나있다. 
    // 그 간격만큼 조정한다. 
    let mx = event.clientX - ctx.canvas.offsetLeft;
    let my = event.clientY - ctx.canvas.offsetTop;
    if(x < mx && mx < x + width && y < my && my < y + height){
        check= true;  
    }else{
        check= false;
    }
    let testText = document.querySelector(".testText");
    testText.innerHTML = ``;
    testText.innerHTML += `x  : ${x} <br>`;
    testText.innerHTML += `y  : ${y} <br>`;
    testText.innerHTML += `mx  : ${mx} <br>`;
    testText.innerHTML += `my : ${my} <br>`;
    testText.innerHTML += `ctx.canvas.offsetLeft  : ${ctx.canvas.offsetLeft} <br>`;
    testText.innerHTML += `ctx.canvas.offsetTop : ${ctx.canvas.offsetTop} <br>`;
});

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

let x = 220;
let y = 220;
let width = 100;
let height = 100;

let check = false;

setInterval(draw, 10);