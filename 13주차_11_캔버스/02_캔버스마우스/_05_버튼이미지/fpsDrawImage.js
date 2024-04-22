function draw() {
    // 이미지 그리기
    ctx.drawImage(img1, 0, 0 , img1.width, img1.height);
    ctx.drawImage(img1, 0, 150 ,img1.width * 2, img1.height * 2);
    ctx.drawImage(img1, 0, 400 ,img1.width / 2, img1.height / 2);
    ctx.drawImage(img2, 0, 500 , img2.width, img2.height);
}

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

let img1 = null;
let img2 = null;
img1 = new Image(); // 이미지 생성
img2 = new Image(); // 이미지 생성
img1.src = "./BTN_Brown.png"; // 이미지 경로 저장 
img2.src = "./BTN_Gray.png"; // 이미지 경로 저장 

setInterval(draw , 10);