const main = function(input1, input2) {    

    // ***아래 영역만 작성***
    let num = input1;
    let array = input2;
    const list1 = num.split(' ');
    const list2 = array.split(' ');
    let i = '';
    for(element of list2) {
        if(element < Number(list1[1])) {
            i += element + ' ';
        }
    } return i;

    // *********************
    
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "5번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("10 5", "1 10 4 9 2 3 8 5 7 6"); // result: 1 4 2 3
    let result2 = document.getElementById("result2");
    result2.innerText = main("4 5", "1 2 3 4"); // result: 1 2 3 4
    let result3 = document.getElementById("result3");
    result3.innerText = "예시 없음"
    let result4 = document.getElementById("result4");
    result4.innerText = "예시 없음"
}