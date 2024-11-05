const main = function(input) {    

    // ***아래 영역만 작성***
    
    const array = input.split('');
    const dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
    const map = new Map();
    let Num = 0;
    let count = 2;
    for(let element of dial) {
        const alphabet = element.split('');
        for(let element of alphabet) {
            map.set(element,count);
        }
        count++
    }
    for(let element of array) {
        Num += map.get(element);
    }
    return Num + array.length;
    


    // *********************
    
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "5번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("WA"); // result: 13
    let result2 = document.getElementById("result2");
    result2.innerText = main("SANS"); // result: 26
    let result3 = document.getElementById("result3");
    result3.innerText = main("UNUCIC"); // result: 36
    let result4 = document.getElementById("result4");
    result4.innerText = main("LOVEWINSALL"); // result: 71
}