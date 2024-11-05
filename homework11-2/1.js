const main = function(input1, input2) {
   
    // ***아래 영역만 작성***
    const array = input2.split(' ');
    const num = [];
    for(let element of array){
        num.push(Number(element));
    }
    for(let i = 1; i <= Number(input1); i++) {
        let j = Number(input1) - 1;
        if(num[0]<num[j]) {
            num.pop();
        } else if(num[0]>num[j]) {
           num.shift();
        } 
        
    } 
    console.log(num);


    // *********************

    /*  
    주의: Math.max() Math.min(), sort() 사용 없이 풀기

    Hint:
        1. 모든 정수는 -1000000보다 크고 1000000보다 작음
        2. 최소값 중에 제일 큰건 1000000일거고 최대값 중에 제일 작은건 -1000000일거임
        3. for로 리스트 돌면서 기존 최대값보다 크면 갱신, 기존 최소값보다 작으면 갱신
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

    // let list = '';
    // for(let i = 0 ; i < 10**6 ; i++) {list += `${Math.floor(Math.random()*2*10**6)-10**6} `}
    // let result4 = document.getElementById("result4");
    // result4.innerText = main("10**6", list.slice(0,-1)); // return: ? ?
}