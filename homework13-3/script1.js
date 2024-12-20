window.onload = function() {
    let randomNumber = Math.floor(Math.random()*100) +1;

    const guesses = document.querySelector(".guesses");
    const lastResult = document.querySelector(".lastResult");
    const lowOrHi = document.querySelector(".lowOrHi"); 

    const guessSubmit = document.querySelector(".guessSubmit");
    const guessField = document.querySelector(".guessField");
    let guessCount = 1;
    let resetButton;


function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random()*100) +1;
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "새로운 게임 시작하기";
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame);
}


function checkGuess() {
    const userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = "지금까지의 숫자들: ";
    }
    guesses.textContent += userGuess + " ";

    if(userGuess === randomNumber) {
        lastResult.textContent = "축하합니다! 정답입니다!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if(guessCount === 10) {
        lastResult.textContent = "!!!게임 오버!!!";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "오답!";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber) {
            lowOrHi.textContent = "방금의 숫자는 정답보다 작습니다."
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = "방금의 숫자는 정답보다 큽니다." 
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}


guessSubmit.addEventListener("click", checkGuess);
}