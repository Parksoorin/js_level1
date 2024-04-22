function drawRect(){
    /*
        네모그리기
        ctx.rect(시작x , 시작y , 가로크기 , 세로크기)
        
        색상 저장
        ctx.fillStyle = "컬러"

        색상채워넣기
        ctx.fill();      
    */
    
    ctx.beginPath();

    ctx.rect(30, 30, 70, 50);
    ctx.stroke();

    ctx.closePath();

    //----------------------------------

    ctx.beginPath(); 

    ctx.rect(200, 200, 100, 100);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.closePath();
}

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 
drawRect();