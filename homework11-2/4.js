const main = function(input) {    

    // ***아래 영역만 작성***
    const array = input.split(', ');
    const set = new Set();
    for(let element of array) {
        set.add(element%42);
    }
    return set.size;

    // *********************

}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "4번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("1, 2, 3, 4, 5, 6, 7, 8, 9, 10"); // result: 10
    let result2 = document.getElementById("result2");
    result2.innerText = main("42, 84, 252, 420, 840, 126, 42, 84, 420, 126"); // result: 1
    let result3 = document.getElementById("result3");
    result3.innerText = main("39, 40, 41, 42, 43, 44, 82, 83, 84, 85"); // result: 6
    let result4 = document.getElementById("result4");
    result4.innerText = main("pass"); // result: X
}