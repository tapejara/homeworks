window.onload = function() {

    const randomNum = [Math.floor(Math.random() * 10)]
    while(randomNum.length < 3) {
        let j = Math.floor(Math.random() * 10)
        if(randomNum.includes(j)) {
            continue;
        }
        randomNum.push(j)
    }
    //숫자야구 랜덤 넘버 생성

    const num1 = document.querySelector(".num1");
    const num2 = document.querySelector(".num2");
    const num3 = document.querySelector(".num3");

    const num4 = document.querySelector(".num4");
    const num5 = document.querySelector(".num5");
    const num6 = document.querySelector(".num6");

    const num7 = document.querySelector(".num7");
    const num8 = document.querySelector(".num8");
    const num9 = document.querySelector(".num9");

    const num10 = document.querySelector(".num10");
    const num11 = document.querySelector(".num11");
    const num12 = document.querySelector(".num12");

    const num13 = document.querySelector(".num13");
    const num14 = document.querySelector(".num14");
    const num15 = document.querySelector(".num15");

    const num16 = document.querySelector(".num16");
    const num17 = document.querySelector(".num17");
    const num18 = document.querySelector(".num18");

    const num19 = document.querySelector(".num19");
    const num20 = document.querySelector(".num20");
    const num21 = document.querySelector(".num21");

    const num22 = document.querySelector(".num22");
    const num23 = document.querySelector(".num23");
    const num24 = document.querySelector(".num24");

    const num25 = document.querySelector(".num25");
    const num26 = document.querySelector(".num26");
    const num27 = document.querySelector(".num27");
    //각 회당 숫자야구 숫자 로그

    const s1 = document.querySelector(".s1");
    const s2 = document.querySelector(".s2");
    const s3 = document.querySelector(".s3");
    const s4 = document.querySelector(".s4");
    const s5 = document.querySelector(".s5");
    const s6 = document.querySelector(".s6");
    const s7 = document.querySelector(".s7");
    const s8 = document.querySelector(".s8");
    const s9 = document.querySelector(".s9");
    //각 회당 스트라이크 로그

    const b1 = document.querySelector(".b1");
    const b2 = document.querySelector(".b2");
    const b3 = document.querySelector(".b3");
    const b4 = document.querySelector(".b4");
    const b5 = document.querySelector(".b5");
    const b6 = document.querySelector(".b6");
    const b7 = document.querySelector(".b7");
    const b8 = document.querySelector(".b8");
    const b9 = document.querySelector(".b9");
    //각 회당 볼 로그

    const o1 = document.querySelector(".o1");
    const o2 = document.querySelector(".o2");
    const o3 = document.querySelector(".o3");
    const o4 = document.querySelector(".o4");
    const o5 = document.querySelector(".o5");
    const o6 = document.querySelector(".o6");
    const o7 = document.querySelector(".o7");
    const o8 = document.querySelector(".o8");
    const o9 = document.querySelector(".o9");
    //각 회당 아웃 로그

    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    const boardCell = document.getElementsByClassName("boardCell");
    const guessSubmit = document.querySelector(".guessSubmit");
    const guessField = document.querySelector(".guessField");
    const lastResult = document.querySelector(".lastResult");
    const answer = document.querySelector(".answer");
    let guessCount = 1;
    let strikeCount = 0;
    let resetButton;
    let strikeAudio = new Audio('assets/audio/strikeEffects.m4a')
    strikeAudio.volume = 0.5

    function resetGame() {
        history.go(0);
    }

    function setGameOver() {
        boardCell.textContent = "X";
        guessSubmit.disabled = true;
        guessField.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textContent = "새로운 게임 시작하기";
        document.getElementsByClassName("input")[0].append(resetButton);
        resetButton.addEventListener("click",resetGame);
    }
    
    function checkGuess() {
        const userGuess = Array.from(String(guessField.value),Number)

        if(userGuess.length !== 3) {
            alert("3자리 숫자를 입력해주세요");
            return;
        } else if(userGuess[0] == userGuess[1]) {
            alert("이 게임에는 각자리의 숫자가 중복되지 않습니다.");
            return;
        } else if(userGuess[0] == userGuess[2]) {
            alert("이 게임에는 각자리의 숫자가 중복되지 않습니다.");
            return;
        }  else if(userGuess[1] == userGuess[2]) {
            alert("이 게임에는 각자리의 숫자가 중복되지 않습니다.");
            return;
        }
        //숫자 자리수 제한, 중복 숫자 방지

        if(guessCount == 1) {
            num1.textContent = userGuess[0];
            num2.textContent = userGuess[1];
            num3.textContent = userGuess[2];
        } else if(guessCount == 2) {
            num4.textContent = userGuess[0];
            num5.textContent = userGuess[1];
            num6.textContent = userGuess[2];
        } else if(guessCount == 3) {
            num7.textContent = userGuess[0];
            num8.textContent = userGuess[1];
            num9.textContent = userGuess[2];
        } else if(guessCount == 4) {
            num10.textContent = userGuess[0];
            num11.textContent = userGuess[1];
            num12.textContent = userGuess[2];
        } else if(guessCount == 5) {
            num13.textContent = userGuess[0];
            num14.textContent = userGuess[1];
            num15.textContent = userGuess[2];
        } else if(guessCount == 6) {
            num16.textContent = userGuess[0];
            num17.textContent = userGuess[1];
            num18.textContent = userGuess[2];
        } else if(guessCount == 7) {
            num19.textContent = userGuess[0];
            num20.textContent = userGuess[1];
            num21.textContent = userGuess[2];
        } else if(guessCount == 8) {
            num22.textContent = userGuess[0];
            num23.textContent = userGuess[1];
            num24.textContent = userGuess[2];
        } else if(guessCount == 9) {
            num25.textContent = userGuess[0];
            num26.textContent = userGuess[1];
            num27.textContent = userGuess[2];
        }
        //전광판 숫자표시, 회당 카운터증가
        
        if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
            lastResult.textContent = "축하합니다 당신의 승리입니다.";
            lastResult.style.color = "aqua";
            answer.textContent = "";
            setGameOver()
        } else if(guessCount == 9) {
            lastResult.textContent = "게임 오버!";
            answer.textContent = "정답: " + randomNum[0] + " " + randomNum[1] + " " + randomNum[2];
            answer.style.color = "Red";
            setGameOver()
        }
        //게임 종료 조건
    
        
        if(guessCount == 1 && (userGuess[0] == randomNum[0] || userGuess[1] == randomNum[1] || userGuess[2] == randomNum[2])) {
            s1.textContent = "O";
            strikeCount++;
            if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s1.textContent += "OO";
                strikeCount += 2 ;
            } else if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1]) {
                s1.textContent += "O";
                strikeCount++;
            } else if(userGuess[0] == randomNum[0] && userGuess[2] == randomNum[2]) {
                s1.textContent += "O";
                strikeCount++;
            } else if(userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s1.textContent += "O";
                strikeCount++;
            }
        }
        if(guessCount == 1 && (randomNum.includes(userGuess[0]) || randomNum.includes(userGuess[1]) || randomNum.includes(userGuess[2]))) {
            b1.textContent = "O"
            if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b1.textContent += "OO"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1])) {
                b1.textContent += "O"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[2])) {
                b1.textContent += "O"
            } else if(randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b1.textContent += "O"
            }
            if(strikeCount > 0) {
                b1.textContent = b1.textContent.slice("O",-strikeCount)
            }
        }
        if(guessCount == 1 && !randomNum.includes(userGuess[0]) && !randomNum.includes(userGuess[1]) && !randomNum.includes(userGuess[2])) {
            o1.textContent = "X"
        }
        strikeCount -= strikeCount;
        //1회 스트라이크, 볼, 아웃 표기

        if(guessCount == 2 && (userGuess[0] == randomNum[0] || userGuess[1] == randomNum[1] || userGuess[2] == randomNum[2])) {
            s2.textContent = "O"
            strikeCount++
            if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s2.textContent += "OO"
                strikeCount += 2 
            }else if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1]) {
                s2.textContent += "O"
                strikeCount++
            } else if(userGuess[0] == randomNum[0] && userGuess[2] == randomNum[2]) {
                s2.textContent += "O"
                strikeCount++
            } else if(userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s2.textContent += "O"
                strikeCount++
            }
        }
        if(guessCount == 2 && (randomNum.includes(userGuess[0]) || randomNum.includes(userGuess[1]) || randomNum.includes(userGuess[2]))) {
            b2.textContent = "O"
            if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b2.textContent += "OO"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1])) {
                b2.textContent += "O"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[2])) {
                b2.textContent += "O"
            } else if(randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b2.textContent += "O"
            }
            if(strikeCount > 0) {
                b2.textContent = b2.textContent.slice("O",-strikeCount)
            }
        }
        if(guessCount == 2 && !randomNum.includes(userGuess[0]) && !randomNum.includes(userGuess[1]) && !randomNum.includes(userGuess[2])) {
            o2.textContent = "X"
        }
        strikeCount -= strikeCount;
        //2회 스트라이크, 볼, 아웃 표기

        if(guessCount == 3 && (userGuess[0] == randomNum[0] || userGuess[1] == randomNum[1] || userGuess[2] == randomNum[2])) {
            s3.textContent = "O"
            strikeCount++
            if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s3.textContent += "OO"
                strikeCount += 2 
            } else if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1]) {
                s3.textContent += "O"
                strikeCount++
            } else if(userGuess[0] == randomNum[0] && userGuess[2] == randomNum[2]) {
                s3.textContent += "O"
                strikeCount++
            } else if(userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s3.textContent += "O"
                strikeCount++
            }
        }
        if(guessCount == 3 && (randomNum.includes(userGuess[0]) || randomNum.includes(userGuess[1]) || randomNum.includes(userGuess[2]))) {
            b3.textContent = "O"
            if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b3.textContent += "OO"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1])) {
                b3.textContent += "O"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[2])) {
                b3.textContent += "O"
            } else if(randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b3.textContent += "O"
            }
            if(strikeCount > 0) {
                b3.textContent = b3.textContent.slice("O",-strikeCount)
            }
        }
        if(guessCount == 3 && !randomNum.includes(userGuess[0]) && !randomNum.includes(userGuess[1]) && !randomNum.includes(userGuess[2])) {
            o3.textContent = "X"
        }
        strikeCount -= strikeCount;
        //3회 스트라이크, 볼, 아웃 표기

        if(guessCount == 4 && (userGuess[0] == randomNum[0] || userGuess[1] == randomNum[1] || userGuess[2] == randomNum[2])) {
            s4.textContent = "O"
            strikeCount++
            if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s4.textContent += "OO"
                strikeCount += 2 
            } else if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1]) {
                s4.textContent += "O"
                strikeCount++
            } else if(userGuess[0] == randomNum[0] && userGuess[2] == randomNum[2]) {
                s4.textContent += "O"
                strikeCount++
            } else if(userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s4.textContent += "O"
                strikeCount++
            }
        }
        if(guessCount == 4 && (randomNum.includes(userGuess[0]) || randomNum.includes(userGuess[1]) || randomNum.includes(userGuess[2]))) {
            b4.textContent = "O"
            if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b4.textContent += "OO"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1])) {
                b4.textContent += "O"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[2])) {
                b4.textContent += "O"
            } else if(randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b4.textContent += "O"
            }
            if(strikeCount > 0) {
                b4.textContent = b4.textContent.slice("O",-strikeCount)
            }
        }
        if(guessCount == 4 && !randomNum.includes(userGuess[0]) && !randomNum.includes(userGuess[1]) && !randomNum.includes(userGuess[2])) {
            o4.textContent = "X"
        }
        strikeCount -= strikeCount;
        //4회 스트라이크, 볼, 아웃 표기

        if(guessCount == 5 && (userGuess[0] == randomNum[0] || userGuess[1] == randomNum[1] || userGuess[2] == randomNum[2])) {
            s5.textContent = "O"
            strikeCount++
            if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s5.textContent += "OO"
                strikeCount += 2 
            } else if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1]) {
                s5.textContent += "O"
                strikeCount++
            } else if(userGuess[0] == randomNum[0] && userGuess[2] == randomNum[2]) {
                s5.textContent += "O"
                strikeCount++
            } else if(userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s5.textContent += "O"
                strikeCount++
            }
        }
        if(guessCount == 5 && (randomNum.includes(userGuess[0]) || randomNum.includes(userGuess[1]) || randomNum.includes(userGuess[2]))) {
            b5.textContent = "O"
            if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b5.textContent += "OO"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1])) {
                b5.textContent += "O"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[2])) {
                b5.textContent += "O"
            } else if(randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b5.textContent += "O"
            }
            if(strikeCount > 0) {
                b5.textContent = b5.textContent.slice("O",-strikeCount)
            }
        }
        if(guessCount == 5 && !randomNum.includes(userGuess[0]) && !randomNum.includes(userGuess[1]) && !randomNum.includes(userGuess[2])) {
            o5.textContent = "X"
        }
        strikeCount -= strikeCount;
        //5회 스트라이크, 볼, 아웃 표기

        if(guessCount == 6 && (userGuess[0] == randomNum[0] || userGuess[1] == randomNum[1] || userGuess[2] == randomNum[2])) {
            s6.textContent = "O"
            strikeCount++
            if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s6.textContent += "OO"
                strikeCount += 2 
            } else if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1]) {
                s6.textContent += "O"
                strikeCount++
            } else if(userGuess[0] == randomNum[0] && userGuess[2] == randomNum[2]) {
                s6.textContent += "O"
                strikeCount++
            } else if(userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s6.textContent += "O"
                strikeCount++
            }
        }
        if(guessCount == 6 && (randomNum.includes(userGuess[0]) || randomNum.includes(userGuess[1]) || randomNum.includes(userGuess[2]))) {
            b6.textContent = "O"
            if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b6.textContent += "OO"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1])) {
                b6.textContent += "O"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[2])) {
                b6.textContent += "O"
            } else if(randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b6.textContent += "O"
            }
            if(strikeCount > 0) {
                b6.textContent = b6.textContent.slice("O",-strikeCount)
            }
        }
        if(guessCount == 6 && !randomNum.includes(userGuess[0]) && !randomNum.includes(userGuess[1]) && !randomNum.includes(userGuess[2])) {
            o6.textContent = "X"
        }
        strikeCount -= strikeCount;
        //6회 스트라이크, 볼, 아웃 표기

        if(guessCount == 7 && (userGuess[0] == randomNum[0] || userGuess[1] == randomNum[1] || userGuess[2] == randomNum[2])) {
            s7.textContent = "O"
            strikeCount++
            if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s7.textContent += "OO"
                strikeCount += 2 
            } else if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1]) {
                s7.textContent += "O"
                strikeCount++
            } else if(userGuess[0] == randomNum[0] && userGuess[2] == randomNum[2]) {
                s7.textContent += "O"
                strikeCount++
            } else if(userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s7.textContent += "O"
                strikeCount++
            }
        }
        if(guessCount == 7 && (randomNum.includes(userGuess[0]) || randomNum.includes(userGuess[1]) || randomNum.includes(userGuess[2]))) {
            b7.textContent = "O"
            if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b7.textContent += "OO"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1])) {
                b7.textContent += "O"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[2])) {
                b7.textContent += "O"
            } else if(randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b7.textContent += "O"
            }
            if(strikeCount > 0) {
                b7.textContent = b7.textContent.slice("O",-strikeCount)
            }
        }
        if(guessCount == 7 && !randomNum.includes(userGuess[0]) && !randomNum.includes(userGuess[1]) && !randomNum.includes(userGuess[2])) {
            o7.textContent = "X"
        }
        strikeCount -= strikeCount;
        //7회 스트라이크, 볼, 아웃 표기

        if(guessCount == 8 && (userGuess[0] == randomNum[0] || userGuess[1] == randomNum[1] || userGuess[2] == randomNum[2])) {
            s8.textContent = "O"
            strikeCount++
            if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s8.textContent += "OO"
                strikeCount += 2 
            } else if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1]) {
                s8.textContent += "O"
                strikeCount++
            } else if(userGuess[0] == randomNum[0] && userGuess[2] == randomNum[2]) {
                s8.textContent += "O"
                strikeCount++
            } else if(userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s8.textContent += "O"
                strikeCount++
            }
        }
        if(guessCount == 8 && (randomNum.includes(userGuess[0]) || randomNum.includes(userGuess[1]) || randomNum.includes(userGuess[2]))) {
            b8.textContent = "O"
            if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b8.textContent += "OO"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1])) {
                b8.textContent += "O"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[2])) {
                b8.textContent += "O"
            } else if(randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b8.textContent += "O"
            }
            if(strikeCount > 0) {
                b8.textContent = b8.textContent.slice("O",-strikeCount)
            }
        }
        if(guessCount == 8 && !randomNum.includes(userGuess[0]) && !randomNum.includes(userGuess[1]) && !randomNum.includes(userGuess[2])) {
            o8.textContent = "X"
        }
        strikeCount -= strikeCount;
        //8회 스트라이크, 볼, 아웃 표기

        if(guessCount == 9 && (userGuess[0] == randomNum[0] || userGuess[1] == randomNum[1] || userGuess[2] == randomNum[2])) {
            s9.textContent = "O"
            strikeCount++
            if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s9.textContent += "OO"
                strikeCount += 2 
            } else if(userGuess[0] == randomNum[0] && userGuess[1] == randomNum[1]) {
                s9.textContent += "O"
                strikeCount++
            } else if(userGuess[0] == randomNum[0] && userGuess[2] == randomNum[2]) {
                s9.textContent += "O"
                strikeCount++
            } else if(userGuess[1] == randomNum[1] && userGuess[2] == randomNum[2]) {
                s9.textContent += "O"
                strikeCount++
            }
        }
        if(guessCount == 9 && (randomNum.includes(userGuess[0]) || randomNum.includes(userGuess[1]) || randomNum.includes(userGuess[2]))) {
            b9.textContent = "O"
            if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b9.textContent += "OO"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[1])) {
                b9.textContent += "O"
            } else if(randomNum.includes(userGuess[0]) && randomNum.includes(userGuess[2])) {
                b9.textContent += "O"
            } else if(randomNum.includes(userGuess[1]) && randomNum.includes(userGuess[2])) {
                b9.textContent += "O"
            }
            if(strikeCount > 0) {
                b9.textContent = b9.textContent.slice("O",-strikeCount)
            }
        }
        if(guessCount == 9 && !randomNum.includes(userGuess[0]) && !randomNum.includes(userGuess[1]) && !randomNum.includes(userGuess[2])) {
            o9.textContent = "X"
        } 
        //9회 스트라이크, 볼, 아웃 표기

        guessCount++
    }

    function strikeEffect() {
        const userGuess = Array.from(String(guessField.value),Number)
        if(userGuess[0] == randomNum[0] || userGuess[1] == randomNum[1] || userGuess[2] == randomNum[2]) {
            title.textContent = "!!Strike!!";
            title.style.color = "Red";
            subtitle.innerHTML = " " + "<br>";
            strikeAudio.play()
        } else {
            title.textContent = "숫자야구";
            subtitle.textContent = "3자리 수를 9회안에 맞춰라!";
        }
        
    }
    //스트라이크 발생시 효과음

    guessSubmit.addEventListener("click", checkGuess);
    guessSubmit.addEventListener("click", strikeEffect);

}