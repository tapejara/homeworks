const main = function(input1, input2) {    

    // ***아래 영역만 작성***
    const array1 = Number(input1);
    const array2 = input2.split(' ');
    let best = Math.max(...array2);
    let i = 0;
    for(let element of array2) {
        let score = element/best*100
        i = i+ score;
    } 
    let average = i/array2.length;
    return average;
    
    


    // *********************
    
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "5번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("3", "40 80 60"); // result: 75.0
    let result2 = document.getElementById("result2");
    result2.innerText = main("3", "10 20 30"); // result: 66.666667
    let result3 = document.getElementById("result3");
    result3.innerText = main("5", "1 2 4 8 16"); // result: 38.75
    let result4 = document.getElementById("result4");
    result4.innerText = main("1", "50"); // result: 100.0
}