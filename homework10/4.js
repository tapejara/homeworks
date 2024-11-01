const main = function(input1, input2, input3) {    
    let num = parseInt(input1); // N
    let array = input2;
    let find = parseInt(input3); // v

    // ***아래 영역만 작성***
    let i = 0;
    const list = array.split(' ');
    for(element of list) {
        if(element == find) {
            i++
        }
    } return i;


    // *********************

    /*
    hint: string의 split() 메서드 활용
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "4번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("11","1 4 1 2 4 2 4 2 3 4 4", "2"); // result: 3
    let result2 = document.getElementById("result2");
    result2.innerText = main("11", "1 4 1 2 4 2 4 2 3 4 4", "5"); // result: 0
    let result3 = document.getElementById("result3");
    result3.innerText = main("5", "1 1 1 1 1", "1"); // result: 5
    let result4 = document.getElementById("result4");
    result4.innerText = main("10", "-1 1 -1 1 1 -1 -1 -1 -1 1", "-1"); // result: 6
}