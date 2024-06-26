function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawRect();

    bulletFire();

    drawBullet();

    moveBullet();

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

function bulletFire(){
    
    if(getKeyOnce('fire')  && bulletList.length < bulletMax){
        let bullet = {
            "x" : myRect.x +50,  // 가운데서 발사시키기 위해 조금 아래에 위치
            "y" : myRect.y +15, 
            "width" : 20, 
            "height" : 20, 
            "speed" : 5,
            "color" : "black",
            "lifeDistance" : 500, // 총알 생명거리 => 총알이 일정거리 이동하면 삭제해준다. 그래야 새총알을 발사할수있다.  
        };
    
        bulletList.push(bullet);

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

function drawRect(){

    ctx.beginPath();

    ctx.rect(myRect.x, myRect.y, myRect.width, myRect.height);
    ctx.fillStyle = myRect.color;
    ctx.fill();
    ctx.closePath();
}


//-------------------------------------------------

function getKeyOnce(key){
    // 중간값인 down을 넣어서 여러번 눌리는것을방지한다. 
    if(keyOnce[key] == "true"){
        keyOnce[key] = "down";
        return true;
    }
    if(keyOnce[key] == "down") {
        return false;
    }
}
function getKeyStay(key){ 
    return keyStay[key];
}
window.addEventListener("keydown", (e) => {
    if(e.code == 'KeyD') {         // d
        keyStay.right = true;
    }
    if(e.code == 'KeyA') {   // a
        keyStay.left = true;
    }
    if(e.code == 'KeyW') {    // w
        keyStay.up = true;
    }
    if(e.code == 'KeyS') {   // s
        keyStay.down = true;
    }
    if(e.code == 'Space'){
        if(keyOnce.fire == "up"){
            keyOnce.fire = "true";
        }
    }
});

window.addEventListener("keyup", (e) => {
    if(e.code == 'KeyD') {         // d
        keyStay.right = false;
    }
    if(e.code == 'KeyA') {   // a
        keyStay.left = false;
    }
    if(e.code == 'KeyW') {    // w
        keyStay.up = false;
    }
    if(e.code == 'KeyS') {   // s
        keyStay.down = false;
    }
    if(e.code == 'Space'){
        keyOnce.fire = "up";
    }
});
//----------------------------------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 
// 변수명을 key 에서 keyStay로 변경한다.
let keyStay = { "right" : false , "left" : false, "up" : false , "down" : false , };

let keyOnce = {"fire" : "up"}; // up , true , down
let myRect = {
    "x" : 100 , 
    "y" : 100 , 
    "width" : 50, 
    "height" : 50, 
    "speed" : 2,
    "color" : "blue",
};

let bulletMax = 10; // 총알개수에 제한이 있어야한다.
let bulletList = [];

setInterval(draw, 10);
