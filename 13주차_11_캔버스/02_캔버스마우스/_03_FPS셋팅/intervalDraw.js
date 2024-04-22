function draw() {
    // 캔버스를 지운다. 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 위 문장을 주석처리 해보면 바로 이해할 수 있다.

    // 캔버스를 다시 그린다.
    drawRect(); 
    
    x += speed ;
    // console.log(x, y , width , height); 
    // 반복해서 화면을 그리기때문에 콘솔로는 값들을 확인하기가 어렵다.

    // 아래와 같이 화면에 적접 출력해서 값을 확인하는 것이 더 편리하다. 
    let testText = document.querySelector(".testText");
    testText.innerHTML = ``;
    testText.innerHTML += `x  : ${x} <br>`;
    testText.innerHTML += `y  : ${y} <br>`;
    testText.innerHTML += `width  : ${width} <br>`;
    testText.innerHTML += `height : ${height} <br>`;
}

function drawRect(){
    ctx.beginPath();

    ctx.rect(x, y, width, height);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.closePath();
}

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

let x = 0;
let y = 0;
let width = 100;
let height = 100;
let speed = 2;

// Frame Per Second 
// 1초에 100번 반복해서 호출한다.
/*
    1000 ==> 1초
    10   ==> 0.01초
*/
setInterval(draw, 10); 