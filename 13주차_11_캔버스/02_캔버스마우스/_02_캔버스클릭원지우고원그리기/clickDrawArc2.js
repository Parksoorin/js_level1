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

let x = 0;
let y = 0;
let radius = 50;
let angle = Math.PI * 2;


window.addEventListener('click', (event) => {
    // 클릭할때마다 지우고 다시그린다.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = event.clientX - ctx.canvas.offsetLeft;
    y = event.clientY - ctx.canvas.offsetTop;
    
    drawArc();
   
});
  
