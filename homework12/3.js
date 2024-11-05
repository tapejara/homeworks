const main = function(input1, input2) {    

    // ***아래 영역만 작성***
    let count = Number(input1);
    const array1 = input2.split('');
    const array2 = [];
    let answer = '';
    for(let element of array1) {
        for(let i = 0; i < count; i++) {
            array2.push(element);
        }
    }
    for(let element of array2) {
        answer += element;
    }
    return answer;

    // *********************

    /*
    문제에 제시된 1개의 예제를 여러개로 쪼갬
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "3번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("3", "ABC"); // result: AAABBBCCC
    let result2 = document.getElementById("result2");
    result2.innerText = main("5", "/HTP"); // result: /////HHHHHTTTTTPPPPP
    let result3 = document.getElementById("result3");
    result3.innerText = main("1", "YUMEHAMA"); // result: YUMEHAMA
    let result4 = document.getElementById("result4");
    result4.innerText = main("2", "TAPEJARA"); // result: TTAAPPEEJJAARRAA
}