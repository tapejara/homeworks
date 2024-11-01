let main = function(input) {
    let grade = parseInt(input);

    // ***아래 영역만 작성***

    if(grade>=90) {
        return "A"
    } else if(grade>=80) {
        return "B"
    } else if(grade>=70) {
        return "C"
    } else if(grade>=60) {
        return "D"
    } else {
        return "F"
    }

    // *********************
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "0번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main(100); // return: A
    let result2 = document.getElementById("result2");
    result2.innerText = main(69); // return: D
    let result3 = document.getElementById("result3");
    result3.innerText = main(30); // return: F
    let result4 = document.getElementById("result4");
    result4.innerText = main(82); // return: B
}