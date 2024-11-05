const main = function(input) {    

    let count1 = input.replaceAll('c=', '@');
    let count2 = count1.replaceAll('c-','@');
    let count3 = count2.replaceAll('dz=','@');
    let count4 = count3.replaceAll('d-','@');
    let count5 = count4.replaceAll('lj','@');
    let count6 = count5.replaceAll('nj','@');
    let count7 = count6.replaceAll('s=','@');
    let count8 = count7.replaceAll('z=','@');
    const answer = count8.split('');
    return answer.length
    
    

    /*
    https://yourusername.tistory.com/416
    ArrayIndexOutOfBoundsException 부분 읽고

    js는 예외적으로 에러발생 안시키고 undefined로 처리해서 코드 종료가 안돼서 그냥 넘어가졌는데
    다른 언어는 전부 에러발생나니까 수정하셈
    이렇게 푸는건 의미 없는거 푼거임
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "4번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("ljes=njak"); // result: 6
    let result2 = document.getElementById("result2");
    result2.innerText = main("ddz=z="); // result: 3
    let result3 = document.getElementById("result3");
    result3.innerText = main("nljj"); // result: 3
    let result4 = document.getElementById("result4");
    result4.innerText = main("c=c="); // result: 2
    let result5 = document.getElementById("result5");
    result5.innerText = main("dz=ak"); // result: 3
}