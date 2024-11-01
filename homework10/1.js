const main = function(input) {
    const arr = input.split(' ');
    let month = parseInt(arr[0]);
    let day = parseInt(arr[1]);

    // ***아래 영역만 작성***
    const calendar =[5, 7, 8, 10, 12];
    if(day>5) {
        day -= 5;
    } else if(day<=5 && month==1) {
        month = 12;
        day += 26;
    } else if(day<=5 && month==3) {
        month = 2;
        day += 23;
    } else if(day<=5 && calendar.includes(month)==true) {
        month--;
        day += 25;
    } else {
        month--;
        day += 26;
    }
    return month + ' ' + day;


    // *********************

    /* 
    문제: month월 day일이 주어지면 -5일을 해서 날짜를 출력하시오 (윤년은 고려하지 않는다)
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "1번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("10 10"); // return: 10 5
    let result2 = document.getElementById("result2");
    result2.innerText = main("12 3"); // return: 11 28
    let result3 = document.getElementById("result3");
    result3.innerText = main("11 1"); // return: 10 27
    let result4 = document.getElementById("result4");
    result4.innerText = main("1 2"); // return: 12 28
}