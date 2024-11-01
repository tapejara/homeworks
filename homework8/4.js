const main = function(input) {    
    let gugu = parseInt(input); // N

    // ***아래 영역만 작성***
    // let result = '';
    // for(let i = 1 ; i < 10 ; i++) {
    //     result += gugu + '*' + i + '=' + gugu*i + '\n';
    // }
    // return result;

    let result = '';
    let sum = 9;
    for(let i = 1 ; i < 10; i++) {
        sum--;
        result += gugu + '*' + i + '*' + sum + '=' + gugu*i*sum + '\n';
    } return result;


    // *********************

    /* hint: 
            return '2 * 1 = 2' + '\n' + '2 * 2 = 4'
            위와 같이 작성하면 출력이 2줄로 나옴
            2 * 1 = 2
            2 * 2 = 4
            뭐 이런식으로 나온다는 말임

            \n이 줄바꿈 문자임
            어쨌든 문자라 return '2 * 1 = 2\n2 * 2 = 4' 이렇게 + 안써도 무방함
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "4번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("2"); 
                                    /* return:
                                        2 * 1 = 2
                                        2 * 2 = 4
                                        2 * 3 = 6
                                        2 * 4 = 8
                                        2 * 5 = 10
                                        2 * 6 = 12
                                        2 * 7 = 14
                                        2 * 8 = 16
                                        2 * 9 = 18
                                    */
    let result2 = document.getElementById("result2");
    result2.innerText = main("3"); // 자세한 설명은 생략한다
    let result3 = document.getElementById("result3");
    result3.innerText = main("7"); // 자세한 설명은 생략한다
    let result4 = document.getElementById("result4");
    result4.innerText = main("9"); // 자세한 설명은 생략한다
}