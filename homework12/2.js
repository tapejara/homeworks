const main = function(input) {

    // ***아래 영역만 작성***
    const array = input.split('');
    let i = array.length - 1
    return array[0] + array[i];


    // *********************

    /*
    문제에 제시된 1개의 예제를 여러개로 쪼갬
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "2번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("ACDKJFOWIEGHE"); // return: AE
    let result2 = document.getElementById("result2");
    result2.innerText = main("O"); // return: OO
    let result3 = document.getElementById("result3");
    result3.innerText = main("AB"); // return: AB
    let result4 = document.getElementById("result4");
    result4.innerText = main("TAPEJARA"); // return: TA
}