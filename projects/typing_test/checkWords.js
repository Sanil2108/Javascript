const startChecking =  function (){
    let currentWordCorrect = true;

    let charsInputted = 0;
    let wordsInput = document.getElementById("wordsInput");
    const somethingInputted = function(event){
        if(!gameover){
            if(started==false){
                started=true;
                startTimer();
            }
            let wordsContainer = document.getElementById("wordsContainer");
            let currentChild = wordsContainer.children[charsInputted];
            if(words[charsInputted] == event.key){
                currentChild.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
                if(event.key==" "){
                    if(currentWordCorrect){
                        scoreIncrease();
                    }
                    currentWordCorrect=true;
                }
            }else{
                currentWordCorrect=false;
                currentChild.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
            }
            charsInputted ++;
            wordsInput.innerHTML += `${event.key}`;
        }
    }
    addEventListener("keypress", somethingInputted);
}