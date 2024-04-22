function drawText(){

    ctx.font = '48px serif';
    ctx.fillStyle = "blue";                     // 텍스트 색상
    ctx.fillText('Hello world', 10, 50);        // 외곽선X

    ctx.font = '48px serif';
    ctx.strokeText('Hello world', 10, 150);     // 외곽선O

    ctx.font ="40px Fira";
    ctx.strokeText('Hello world', 10, 250);
    ctx.fillStyle = "rgb(250, 100, 100)";       // 텍스트 내부에 색칠
    ctx.fillText('Hello world', 10, 250);
}

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 
drawText();