function drawArc(){

    /*
        ctx.arc(x, y, 반지름, 시작각도, 마지막각도) 
    */
    console.log(Math.PI);
    ctx.beginPath();
    // 2*Math.PI = 원
    ctx.arc(100, 100, 50, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    // Math.PI = 반원
    ctx.arc(300, 300, 30, 0 , Math.PI);
    ctx.fillStyle="red"
    ctx.fill();
    ctx.closePath();
}

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 
drawArc();