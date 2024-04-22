function draw() {
    // 캔버스를 지운다. 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 이미지 그리기
    ctx.drawImage(img, x, y, width, height);

    // 택스트 출력
    ctx.font ="30px Fira";
    ctx.strokeText(buttonText, x+13, y + 33);

    ctx.fillStyle = "rgb(100, 200, 100)";
    ctx.fillText(buttonText, x +13, y + 33);
}

// mousemove를 사용해서 버튼을 구현
window.addEventListener('mousemove', (event) => {
    let mx = event.clientX - ctx.canvas.offsetLeft;
    let my = event.clientY - ctx.canvas.offsetTop;
 
    if(x < mx && mx < x + width && y < my && my < y + height){
        img.src = "BTN_Brown.png";
       
    }else{
        img.src = "BTN_Gray.png";

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
let height = 50;

let img = new Image();
img.src = "BTN_Gray.png";
let buttonText = "OVER";

setInterval(draw, 10);


