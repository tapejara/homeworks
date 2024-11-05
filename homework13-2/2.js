const main = function(input) {

    const array = input.split('');
    let answer = 1;
    for(let i = 0; i < array.length/2; i++) {
        let j = array.length -1 - i;
        if(array[i] == array[j]) {
            continue;
        } else {
            answer--;
            break;
        }
    }
    return answer;

    /* 
    1번 예시 기준으로
    l(0) == l(4)
    e(1) == e(3)
    v(2) == v(2)
    e(3) == e(1)
    l(4) == l(0)
    검사하고 있음

    => e(1) == e(3) 이걸 검사했는데 e(3) == e(1) 이걸 또 검사할 필요가 있을까?
    다시 생각하고 고치기
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "2번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("level"); // return: 1
    let result2 = document.getElementById("result2");
    result2.innerText = main("baekjoon"); // return: 0
    let result3 = document.getElementById("result3");
    result3.innerText = main("tapejara"); // return: 0
    let result4 = document.getElementById("result4");
    result4.innerText = main("우영우"); // return: 1
}