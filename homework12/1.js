const main = function(input1, input2) {
   
    // ***아래 영역만 작성***
    const array = input1.split('');
    let i = Number(input2);
    let j = array[i-1];
    return j;




    // *********************

    /*  
    모르겠으면 1참조.png 공부하고 풀기
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "1번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("Sprout", "3"); // return: r
    let result2 = document.getElementById("result2");
    result2.innerText = main("shiftpsh", "6"); // return: p
    let result3 = document.getElementById("result3");
    result3.innerText = main("yumehama", "4"); // return: e
    let result4 = document.getElementById("result4");
    result4.innerText = main("Tapejara", "7"); // return: r
}