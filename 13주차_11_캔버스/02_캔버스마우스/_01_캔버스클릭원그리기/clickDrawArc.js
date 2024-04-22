function drawArc(){
    ctx.beginPath();

    ctx.arc(x, y, radius, 0, angle);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.closePath();
}

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 
console.log("캔버스 왼쪽 여백 = " + ctx.canvas.offsetLeft);
console.log("캔버스 상단 여백 = " + ctx.canvas.offsetTop);

let x = 0;
let y = 0;
let radius = 40;
let angle = Math.PI * 2;


window.addEventListener('click', (event) => {
    //캔버스의 시작위치는  모니터의 시작위치와 다르다. 
    //그간격만큼 조정한다. 
    x = event.clientX - ctx.canvas.offsetLeft;
    y = event.clientY - ctx.canvas.offsetTop;

    console.log(event.clientX , ctx.canvas.offsetLeft , x);
    console.log(event.clientY , ctx.canvas.offsetTop , y);
    drawArc();
});
  
