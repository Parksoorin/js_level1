function drawLine(){
    /*
        [0] 열기 
        ctx.beginPath();

        [1] 시작점
        moveTo (start x , start y);
        [2] 끝점
        lineTo (end x , end y)
        [3] 그리기
        ctx.stroke();

        [4] 닫기 
        ctx.closePath();
    */
   
    ctx.beginPath();

    ctx.moveTo(100, 75);  // 시작점
    ctx.lineTo(300, 75);  // 끝점
    ctx.stroke();         // 그리기

    ctx.moveTo(300, 75);  // 시작점
    ctx.lineTo(300, 275);  // 끝점
    ctx.stroke();         // 그리기

    ctx.moveTo(20, 175);  // 시작점
    ctx.lineTo(45, 315);  // 끝점
    ctx.stroke();         // 그리기

    ctx.closePath();


}

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 
drawLine();