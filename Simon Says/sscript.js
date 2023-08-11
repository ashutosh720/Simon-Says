let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2=document.querySelector("h2");

let btns=["yellow","red","green","purple"];

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started  = true;

        levelUp();
     }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
 
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    gameFlash(randBtn);
    console.log(gameSeq);
}

function checkAns(idx){
    //  


    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
        // console.log("same value");
    } else{
        document.querySelector("body").style.backgroundColor="red";
        h2.innerText=`GameOver! Your Score was ${level} Press any key`;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150);
        reset();
    }

}

function btnPress(idx){
    // console.log(this)
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    // console.log(userColor);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq=[]; 
    level=0;
}