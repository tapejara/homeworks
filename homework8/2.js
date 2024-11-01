const main = function(input) {
    const arr = input.split(' ');
    let hour = parseInt(arr[0]); // H
    let minute = parseInt(arr[1]); // M

    // ***아래 영역만 작성***
    // if(minute>=45) {
    //     minute -= 45;
    // } else if(minute<45 && hour>0) {
    //     minute += 15;
    //     hour--;
    // } else if(minute<45 && hour==0) {
    //     minute +=15;
    //     hour =23;
    // }
    // return hour + ' ' + minute ;
    if(minute>5) {
        minute -= 5;
    } else if(minute<5 && hour>1) {
        minute += 25;
        hour--;
    } else if(minute<5 && hour==1) {
        minute += 25;
        hour = 12;
    }
    return hour + ' ' + minute ;


    // *********************

    /* hint: 
            return 23 + ' ' + 45 
            위와 같이 작성하면 출력이 23 45처럼 나옴
            숫자 + 문자 + 숫자하면 문자로 나온다는 말임            
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "2번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("10 10"); // return: 9 25
    let result2 = document.getElementById("result2");
    result2.innerText = main("2 3"); // return: 23 45
    let result3 = document.getElementById("result3");
    result3.innerText = main("1 1"); // return: 22 55
    let result4 = document.getElementById("result4");
    result4.innerText = main("12 15"); // return: 12 00
}