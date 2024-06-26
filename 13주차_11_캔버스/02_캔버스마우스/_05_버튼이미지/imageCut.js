function draw() {
    // 이미지 그리기
    ctx.drawImage(img, 0, 0, img.width, img.height);

    /* 
        drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    */
    let sx = 0;         // 이미지 내에서 자르기를 시작할 x축 위치
    let sy = 0;         // 이미지 내에서 자르기를 시작할 y축 위치
    let sWidth = 80;    // 시작 x축을 기준으로 자를 이미지의 가로 사이즈
    let sHeight = 80;   // 시작 y축을 기준으로 자를 이미지의 세로 사이즈

    let dx = 0;         // 잘라낸 이미지를 캔버스에 그리는(배치하는) 시작 x축 위치
    let dy = 300;       // 잘라낸 이미지를 캔버스에 그리는(배치하는) 시작 y축 위치
    let dWidth = 80;    // 잘라낸 이미지를 캔버스에 그려질 이미지의 가로 사이즈
    let dHeight = 80;   // 잘라낸 이미지를 캔버스에 그려질 이미지의 세로 사이즈

    ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

    sx = 240;
    sy = 100;
    sWidth = 80;
    sHeight = 80;

    dx = 0;
    dy = 400;
    dWidth = 80;
    dHeight = 80;

    ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
}

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

let img = new Image(); // 이미지 생성
img.src = "./chess_640.png"; // 이미지 경로 저장 


setInterval(draw, 10);