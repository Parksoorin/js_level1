function draw() {
    // 캔버스를 지운다. 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 캔버스를 다시 그린다.
    drawArc(); 
}

function drawArc(){
    ctx.beginPath();

    ctx.arc(x, y, radius, 0, angle);
    if(check){
        ctx.fillStyle = "red";
    }else{
        ctx.fillStyle = "blue";
    }

    ctx.fill();
    ctx.closePath();
}

function getPointiInArc(x, y, mx, my) {
    /*
        제곱근을 구하는 함수
        Math.sqrt() 
        
        절대값을 구하는 함수
        Math.abs()
    */

    let hypotenusePow = Math.abs((x - mx) * (x - mx) + (y - my) * (y - my));
    let hypotenuse = Math.sqrt(hypotenusePow);
    console.log(x , " ", y, " ", mx, " ", my);
    console.log(hypotenuse, " ", radius);
    if(hypotenuse <= radius){
        return true;
    }
    return false;
}

window.addEventListener("click", (event) => {
    let mx = event.clientX - ctx.canvas.offsetLeft;
    let my = event.clientY - ctx.canvas.offsetTop;

    check = getPointiInArc(x, y, mx, my);
   
});
//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

let x = 300;        // 원의 중앙 x좌표
let y = 300;        // 원의 중앙 y좌표
let radius = 150;
let angle = Math.PI * 2;

let check = false;

setInterval(draw, 10);
