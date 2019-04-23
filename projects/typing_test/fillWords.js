let words;

function doWords(){
    words = "There was once a Bald Man who sat down after work on a hot summer's day. A Fly came up and kept buzzing about his bald pate, and stinging him from time to time. The Man aimed a blow at his little enemy, but his palm came on his head instead. Again the Fly tormented him, but this time the Man was wiser and said: \"You will only injure yourself if you take notice of despicable enemies.\"";
    let wordsContainer = document.getElementById("wordsContainer");
    let numWords = 0;
    const initWords = ()=>{
        for (let i=0;i<words.length;i++){
            let tempDiv = document.createElement("div");
            tempDiv.style.display="inline";
            tempDiv.id = `charNo${i}`;
            tempDiv.innerText = `${words[i]}`;

            wordsContainer.appendChild(tempDiv);

            if(words[i]==" "){
                numWords ++;
            }
        }
    }

    initWords();
}