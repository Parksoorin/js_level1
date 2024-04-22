/*
    오목판(그리드) 만들기(10 * 10)
*/

function drawGrid(){
    ctx.beginPath();
    
    let originX = 100;  // 시작위치
    let originY = 100;  // 시작위치
    let lineGap = 50;   // 그리드 간격
    let lineCount = 10; // 선 개수 조절

    // 세로 그리기
    for(let i = 0; i < lineCount; i++){
        let startX = originX + lineGap * i;
        let startY = originY;
        let endX = startX;
        let endY = lineGap * (lineCount - 1) + originY;
        ctx.moveTo(startX, startY); 
        ctx.lineTo(endX, endY); 
        ctx.stroke();        
    }

    // 가로 그리기
    for(let i = 0; i < lineCount;  i++){
        let startY = originY + lineGap * i;
        let startX = originX;
        let endY = startY;
        let endX = lineGap * (lineCount - 1) + originX;
        ctx.moveTo(startX, startY); 
        ctx.lineTo(endX, endY); 
        ctx.stroke();        
    }
    
    ctx.closePath();
}

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 
drawGrid();