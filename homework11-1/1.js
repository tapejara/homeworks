const main = function(input1, input2) {
   
    // ***아래 영역만 작성***
    const array = input2.split(' ');
    const num = [];
    for(let element of array){
        num.push(Number(element));
    }
    let i = -1000000;
    let j = 1000000;
    for(let element of num) {
        if( element > i) {
            i = i - i + element;

        }
        if(element < j ) {
            j = j - j + element;
        }
    }
    return j + ' ' + i;
    


    // *********************

    /*  
    주의: Math.max() Math.min(), sort() 사용 없이 풀기
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "1번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("5", "20 10 35 30 7"); // return: 7 35
    let result2 = document.getElementById("result2");
    result2.innerText = main("5", "97241 -960903 -599576 -254349 881630"); // return: -960903  881630
    let result3 = document.getElementById("result3");
    result3.innerText = main("10", "-46279 -446749 83571 -237415 785772 67155 493632 890561 461249 371676"); // return: -446749 890561

    let list = '';
    for(let i = 0 ; i < 10**6 ; i++) {list += `${Math.floor(Math.random()*2*10**6)-10**6} `}
    let result4 = document.getElementById("result4");
    result4.innerText = main("10**6", list.slice(0,-1)); // return: ? ?
}