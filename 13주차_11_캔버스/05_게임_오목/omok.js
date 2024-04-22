
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(showGrid){
        for(let i = 0; i < areaArcList.length; i++){     
            drawArc(areaArcList[i]);        
        }
    }
    drawGrid();
    for(let i = 0; i < whiteArcList.length; i++){     
        drawArc(whiteArcList[i]);        
    }
    for(let i = 0; i < blackArcList.length; i++){     
        drawArc(blackArcList[i]);        
    }

}
function setAreaArcList(){
   
    let originx = 50; // 시작위치
    let originy = 50; // 시작위치
    let linegap = 50;  // 그리드 간격
    let lineCount = 10; // 선 개수조절
    for(let i = 0; i < lineCount; i++){
        for(let j = 0; j < lineCount; j++){
            let arc = {
                "x" : originx + j * linegap,
                "y" : originy + i * linegap,
                "radius" : 20,
                "color" : "lightgray",
            };
            areaArcList.push(arc);
        }
    }
}
function drawArc(arc){

    // 외각선
    ctx.beginPath();
    ctx.arc(arc.x, arc.y, arc.radius, 0 , Math.PI * 2);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(arc.x, arc.y, arc.radius, 0 , Math.PI * 2);
    ctx.fillStyle = arc.color;
    ctx.fill();
    
    ctx.closePath();
}

function drawGrid(){
    /*
        오목판(그리드) 만들기(10 * 10)
    */
    ctx.beginPath();
    
    let originx = 50; // 시작위치
    let originy = 50; // 시작위치
    let linegap = 50;  // 그리드 간격
    let lineCount = 10; // 선 개수조절

    // 세로 그리기
    for(let i = 0; i < lineCount; i++){
        let startx = originx + linegap * i;
        let starty = originy;
        let endx = startx ;
        let endy = linegap * lineCount + originy - linegap;
        ctx.moveTo(startx, starty); 
        ctx.lineTo(endx, endy); 
        ctx.stroke();        
    }

    // 가로 그리기
    for(let i = 0; i < lineCount;  i++){
        let starty = originx + linegap * i;
        let startx = originy;
        let endy = starty;
        let endx = linegap * lineCount + originx - linegap;
        ctx.moveTo(startx ,  starty); 
        ctx.lineTo(endx, endy); 
        ctx.stroke();        
    }
    
    ctx.closePath();
}


function getPointiInArc(x , y , mx  , my , radius){
    let hypotenusePow = (x-mx) * (x-mx) + (y-my) * (y-my);
    let hypotenuse = Math.sqrt(hypotenusePow);
   
    if(hypotenuse <= radius){
        return true;
    }
    return false;
}


window.addEventListener('mousedown', (event) => {

    let mx = event.clientX - ctx.canvas.offsetLeft;
    let my = event.clientY - ctx.canvas.offsetTop;

    for(let i = 0; i < areaArcList.length; i++){
        let check = getPointiInArc(areaArcList[i].x , areaArcList[i].y , mx , my  , areaArcList[i].radius);
        if(check){
            let arc = {
                "x" : areaArcList[i].x,
                "y" : areaArcList[i].y,
                "radius" : 20,
                "color" : turn,
            };
            areaArcList.splice(i , 1);
            if(turn == "white"){
                whiteArcList.push(arc);
                turn = "black"
            }else{
                blackArcList.push(arc);
                turn = "white"
            }
            
            break;
        }
    }
});

let showGrid = false;
let gridCheckButton = document.getElementById("gridCheck");
gridCheckButton.addEventListener('click', (e) =>{
    if(showGrid == true){
        showGrid = false;
    }else{
        showGrid = true;
    }
});

let resetButton = document.getElementById("reset");
resetButton.addEventListener('click', (e) =>{
    areaArcList = []
    whiteArcList = []
    blackArcList = []
    turn = "white"; // black
    showGrid = false;
    setAreaArcList();
});


//-------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 
let areaArcList = []
let whiteArcList = []
let blackArcList = []
let turn = "white"; // black
setAreaArcList();
setInterval(draw , 10);

