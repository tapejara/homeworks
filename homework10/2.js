const main = function(input1, input2) {
    const arr = input1.split(' ');
    let month = parseInt(arr[0]);
    let day = parseInt(arr[1]);
    let add = parseInt(input2); 

    // ***아래 영역만 작성***
    day += add;
    const calendar1 = [1, 3, 5, 7, 8, 10];
    const calendar2 = [4, 6, 9, 11];
    while(true) {
        if(calendar1.includes(month) && day>31) {
            month++;
            day -=31;
        } else if(calendar2.includes(month) && day>30) {
            month++;
            day -=30;
        } else if(month == 12 && day>31) {
            month = 1;
            day -=31;
        } else if(month== 2 && day>28) {
            month++;
            day -=28;
        } else {
            break;
        }
    }
    return month + ' ' + day;
    

    // *********************

    /* 
    문제: month월 day일이 주어지고, 추가로 add일이 주어지면 month월 day일에 add일을 더한 날짜를 출력하시오 (윤년은 고려하지 않는다)
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "2번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("11 28", "5"); // return: 12 3
    let result2 = document.getElementById("result2");
    result2.innerText = main("9 3", "122"); // return: 1 3
    let result3 = document.getElementById("result3");
    result3.innerText = main("9 3", "72"); // return: 11 14
    let result4 = document.getElementById("result4");
    result4.innerText = main("12 25", "9"); // return: 1 3
}