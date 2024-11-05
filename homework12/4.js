const main = function(input) {    

    // ***아래 영역만 작성***
    const array = input.split(' ');
    const count = [];
    for(let element of array) {
        if(!element == ' ') {
            count.push(element);
        }
    }
    return count.length;



    // *********************

}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "4번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("The Curious Case of Benjamin Button"); // result: 6
    let result2 = document.getElementById("result2");
    result2.innerText = main(" The first character is a blank"); // result: 6
    let result3 = document.getElementById("result3");
    result3.innerText = main("The last character is a blank "); // result: 6
    let result4 = document.getElementById("result4");
    result4.innerText = main("pass"); // result: X
}