const main = function(input) {    
    let num = parseInt(input); // N

    // ***아래 영역만 작성***
    let sum = 'int';
    for(let i =0 ; i<num/4; i++) {
        sum = 'long ' + sum ;
    } 
    return sum;


    // *********************
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "6번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("4"); // return: long int
    let result2 = document.getElementById("result2");
    result2.innerText = main("12"); // return: long long long int
    let result3 = document.getElementById("result3");
    result3.innerText = main("20"); // return: long long long long long int
    let result4 = document.getElementById("result4");
    result4.innerText = main("32"); // return: long long long long long long long long int
}