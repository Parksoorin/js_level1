function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawRect();

    bulletFire();

    drawBullet();

    moveBullet();

}

function drawRect(){
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.fillStyle = rect.color;
    ctx.fill();
    ctx.closePath();
}

function bulletFire(){
    /*
        [키문제점]
            키가 한번에 여러번 눌려 총알이 뭉쳐서 나가게된다. 
            다음 챕터에서 한번에 한발씩 발사가 되도록 수정한다. 
    */
    if(key.fire == true && bulletList.length < bulletMax){
        let bullet = {
            "x" : rect.x + rect.width, 
            "y" : rect.y + 15, 
            "width" : 20, 
            "height" : 20, 
            "speed" : 5,
            "color" : "black",
            "lifeDistance" : 400, 
            // 총알이 지워지는 것을 보여주기위해 400으로 짧게 설정하였다.
            // 보통은 화면 밖을 넘어가면 삭제해준다.
        };
    
        bulletList.push(bullet);
        console.log(bulletList.length);
    }
}

function moveBullet(){
    for(let i = 0; i < bulletList.length; i++){
        bulletList[i].x += bulletList[i].speed;
        bulletList[i].lifeDistance -=  bulletList[i].speed; // 이동한만큼 생명 거리를 감소시킨다. 
        if(bulletList[i].lifeDistance <= 0){
            bulletList.splice(i , 1);  // 삭제한다. 
        }
    }
}

function drawBullet(){
    ctx.beginPath();

    for(let i = 0; i < bulletList.length; i++){

        ctx.rect(bulletList[i].x, bulletList[i].y, bulletList[i].width, bulletList[i].height);
        ctx.fillStyle = bulletList[i].color;
        ctx.fill();
    }
    
    ctx.closePath();
}

//-------------------------------------------------

window.addEventListener("keydown", (e) => {
    if(e.code == 'Space') {   
        key.fire = true;
    }
    console.log(e.code);
});

window.addEventListener("keyup", (e) => {
   if(e.code == 'Space') {  
        key.fire = false;
    }
});
//----------------------------------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

let key = { "fire" : false };
let rect = {
    "x" : 100, 
    "y" : 100, 
    "width" : 50, 
    "height" : 50, 
    "speed" : 2,
    "color" : "blue"
};

// 한 화면에 최대한 발사할 수 있는 
// 총알의 개수를 10개로 제한한다.
let bulletMax = 10; 
let bulletList = [];

setInterval(draw, 10);
