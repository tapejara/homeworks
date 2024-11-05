const main = function(input) {

    const piece = input.split(' ');
    const original =[1, 1, 2, 2, 2, 8];
    const answer = [];
    for(let i = 0; i < 6; i++) {
        answer.push(original[i]-piece[i]);
    }
    return answer;
    
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "1번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("0 1 2 2 2 7"); // return: 1 0 0 0 0 1
    let result2 = document.getElementById("result2");
    result2.innerText = main("2 1 2 1 2 1"); // return: -1 0 0 1 0 7
}