const main = function(input) {

    const array = input.split('');
    let answer = 1;
    for(let i = 0; i < array.length; i++) {
        let j = array.length -1 - i;
        if(array[i] == array[j]) {
            continue;
        } else {
            answer--;
            break;
        }
    }
    return answer;

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