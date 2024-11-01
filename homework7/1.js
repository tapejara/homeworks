const main = function(input1, input2) {    
    let x = parseInt(input1); // x
    let y = parseInt(input2); // y

    // ***아래 영역만 작성***
    if(x<0 && y<0) {
        return 3;
    } else if(x>0 && y<0) {
        return 4;
    } else if(x>0 && y>0) {
        return 1;
    } else {
        return 2;
    }



    // *********************
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "1번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("12", "5"); // return: 1
    let result2 = document.getElementById("result2");
    result2.innerText = main("9", "-13"); // return: 4
    let result3 = document.getElementById("result3");
    result3.innerText = main("-3", "-5"); // return: 3
    let result4 = document.getElementById("result4");
    result4.innerText = main("-1", "9"); // return: 2
}