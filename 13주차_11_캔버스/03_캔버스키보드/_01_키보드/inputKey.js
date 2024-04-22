function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", (e) => {
    console.log("down = " + e.code);
});

window.addEventListener("keyup", (e) => {
    console.log("up = " + e.code);
});

//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 
setInterval(draw, 10);

