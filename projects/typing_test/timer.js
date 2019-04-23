let currentTime = 60;

let started = false;

const startTimer = ()=>{
    interval = setInterval(()=>{
        if(currentTime == 0){
            clearInterval(interval);
            gameover=true;
        }
        updateTimer();
        currentTime--;
    }, 1000);
}

const gameOver =()=>{
    console.log(`Game over and score is - ${score}`)
}

const updateTimer = ()=>{
    timerText = document.getElementById("timerText");
    timeMinutes = parseInt(currentTime/60);
    timeSeconds = currentTime%60;
    if(timeMinutes>=10){
        timeMinutes=`${timeMinutes}`;
    }else{
        timeMinutes=`0${timeMinutes}`;
    }
    if(timeSeconds>=10){
        timeSeconds=`${timeSeconds}`;
    }else{
        timeSeconds=`0${timeSeconds}`;
    }
    timerText.innerHTML = `${timeMinutes}:${timeSeconds}`;
}