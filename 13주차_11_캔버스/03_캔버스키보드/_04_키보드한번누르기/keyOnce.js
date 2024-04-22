function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 앞으로 키보드조작은 아래와 같이 함수를 따로만들어서 사용하길 권장한다. 
    if(getKeyStay("left")){
        console.log("계속눌림left");
    }
    if(getKeyStay("up")){
        console.log("계속눌림up");
    }
    if(getKeyStay("right")){
        console.log("계속눌림right");
    }
    if(getKeyStay("down")){
        console.log("계속눌림down");
    }

    if(getKeyOnce("fire")){
        console.log("한번만눌림fire")
    }
}

//-------------------------------------------------
function getKeyOnce(key){
    // 중간값인 down을 넣어서 여러번 눌리는것을방지한다. 
    if(keyOnce[key] == "true") {
        keyOnce[key] = "down";
        return true;
    }
    else if(keyOnce[key] == "down") {
        return false;
    }
}

function getKeyStay(key){ 
    return keyStay[key];
}

window.addEventListener("keydown", (e) => {
    if(e.code == 'KeyD') {    
        keyStay.right = true;
    }
    if(e.code == 'KeyA') {   
        keyStay.left = true;
    }
    if(e.code == 'KeyW') {   
        keyStay.up = true;
    }
    if(e.code == 'KeyS') {   
        keyStay.down = true;
    }
    if(e.code == 'Space'){
        keyOnce.fire = "true";
    }
});

window.addEventListener("keyup", (e) => {
    if(e.code == 'KeyD') {        
        keyStay.right = false;
    }
    if(e.code == 'KeyA') {   
        keyStay.left = false;
    }
    if(e.code == 'KeyW') {    
        keyStay.up = false;
    }
    if(e.code == 'KeyS') {   
        keyStay.down = false;
    }
    if(e.code == 'Space'){
        keyOnce.fire = "up";
    }
});
//----------------------------------------------------------------------------
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); 

// 키가 한번만 눌리게 만들기 위해서는 함수를 따로 만들어야한다. 
// 변수명을 key에서 keyStay로 변경한다.
// 변수명을 key에서 keyOnce로 변경한다.

let keyStay = {"right":false, "left":false, "up":false, "down":false};
let keyOnce = {"fire" : "up"}; // up , true , down

setInterval(draw, 10);
