let score = 0;

let scoreFieldSizes=[120, 90, 60];
let scoreField;

let gameover = false;

const scoreIncrease = ()=>{
    score += 1;
    if(score>10){
        scoreField.style.fontSize=scoreFieldSizes[1];
    }else if(score>100){
        scoreField.style.fontSize=scoreFieldSizes[2];
    }
    scoreField.innerHTML=score;
}

const controlsInit = ()=>{
    scoreField = document.getElementById("scoreField");
    scoreField.innerHTML=score;

    let rotating = false;
    let restartButtonImage = document.getElementById("restartButtonImage");
    restartButtonImage.addEventListener("mouseover", (event)=>{
        if(!rotating){
            rotating=true;
            x=0;
            rotateAnimation = setInterval(()=>{
                restartButtonImage.style.transform = `rotate(${x}deg)`
                if(x>=360){
                    x=0;
                    rotating=false;
                    restartButtonImage.style.transform = `rotate(0deg)`
                    clearInterval(rotateAnimation);
                }
                x+=10;
            }, 16);
        }
    });
}