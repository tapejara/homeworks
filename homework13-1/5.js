const main = function(input) {    

    const array = input.split('');
    const chunk = [];
    for(let i = 0; i < array.length; i++) {
        if(chunk.includes(array[i])) {
            chunk.splice(0,i);
            break;
        } else if(array[i] != array[i+1]) {
            chunk.push(array[i]);
        }
        
    }
    if(chunk.length > 0 ) {
        return 1;
    } else if(chunk.length == 0) {
        return 0;
    }

    /*
        입력
        첫째 줄에 알파벳 소문자로 이루어진 단어가 주어지며, 길이는 최대 100이다. 

        출력
        주어진 단어가 그룹 단어라면 1을, 아니라면 0을 출력한다.
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "5번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("happy"); // result: 1
    let result2 = document.getElementById("result2");
    result2.innerText = main("yzyzy"); // result: 0
    let result3 = document.getElementById("result3");
    result3.innerText = main("abcabc"); // result: 0
    let result4 = document.getElementById("result4");
    result4.innerText = main("aaa"); // result: 1
    let result5 = document.getElementById("result5");
    result5.innerText = main("z"); // result: 1
}