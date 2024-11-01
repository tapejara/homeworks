const main = function(input1, input2) {
    const arr = input1.split(' ');
    let hour = parseInt(arr[0]); // A
    let minute = parseInt(arr[1]); // B
    let add = parseInt(input2); // C

    // ***아래 영역만 작성***
    // minute += add;
    // let addition = Math.floor(minute/60);
    // hour += addition;
    // minute %= 60;
    // hour %= 24;
    // return hour + ' ' + minute;

    minute += add;
    let month = Math.floor(minute/30);
    minute %= 30;
    hour += month;
    hour %= 12;
    if(hour == 0) {
        hour = 12;
    }
    return hour + ' ' + minute;

    // *********************
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "3번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("2 20", "30"); // return: 14 50
    let result2 = document.getElementById("result2");
    result2.innerText = main("5 30", "80"); // return: 19 0
    let result3 = document.getElementById("result3");
    result3.innerText = main("11 28", "25"); // return: 0 13
    let result4 = document.getElementById("result4");
    result4.innerText = main("8 5", "200"); // return: 11 25
}