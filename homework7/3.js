const main = function(input1, input2) {
    const arr = input1.split(' ');
    let hour = parseInt(arr[0]); // A
    let minute = parseInt(arr[1]); // B
    let add = parseInt(input2); // C

    // ***아래 영역만 작성***
    let a = minute+add;
    let b = a/60;
    let c = a%60;
    let d = -1+b;
    let e = hour+b;
    let f = a-c;
    let g = f/60;
    let h = -1+g;
    let i = hour+g;
    if(c==0 && hour==23) {
        return d+' '+0;
    } else if(c==0) {
        return e+ ' '+0;
    } else if(a<60) {
        return hour+ ' '+a;
    } else if(hour==23) {
        return h+' '+c;
    } else {
        return i+ ' ' +c;
    }



    // *********************
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "3번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("23 20", "30"); // return: 14 50
    let result2 = document.getElementById("result2");
    result2.innerText = main("17 40", "80"); // return: 19 0
    let result3 = document.getElementById("result3");
    result3.innerText = main("23 48", "25"); // return: 0 13
    let result4 = document.getElementById("result4");
    result4.innerText = main("8 5", "200"); // return: 11 25
}