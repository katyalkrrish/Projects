let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started =false;
let level =0;

let h2= document.querySelector("h2");

let high = document.querySelector("h3");
let highestscore = 0;

console.dir(high);
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);

}




function levelUp(){
    userSeq=[];
level++;



h2.innerText=`Level ${level}`;
// high.innerText=`highest score till now : ${highscore}`;
let randIdx=Math.floor(Math.random()*4);
let randomColor = btns[randIdx];
let randBtn = document.querySelector(`.${randomColor}`);
// console.log(randBtn);
// console.log(randomColor);
// console.log(randIdx);
gameSeq.push(randomColor);
console.log(gameSeq);
gameFlash(randBtn);

}
// let high = document.querySelector("high");

function checkAns(idx){
    // console.log(`current level : ${level}`)
    // let idx = level-1;
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length== gameSeq.length){
        setTimeout(levelUp,1000);
       }
       if(level>highestscore){
        highestscore=level;
       }
       high.innerHTML =`highest score <b> ${highestscore} </b>`;

    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level -1}</b> <br> press any key to start`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
   let btn =this;
   userFlash(btn);
   let usercolor = btn.getAttribute("id");
//    console.log(usercolor);
   userSeq.push(usercolor);
//    console.log(userSeq);
   checkAns(userSeq.length-1);
}
let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}