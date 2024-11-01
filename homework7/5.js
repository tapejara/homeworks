const main = function(input) {    
    let num = parseInt(input); // n

    // ***아래 영역만 작성***
    let j= 0;
    for(let i=1; i<=num; i++) {
        const no =[];
        no.push(i);
        for(let element of no) {
            j= j+element;
            console.log(j);

        }
    }    
    // *********************
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "5번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("3"); // return: 6
    let result2 = document.getElementById("result2");
    result2.innerText = main("15"); // return: 120
    // let result3 = document.getElementById("result3");
    // result3.innerText = main("4999"); // return: 12497500
    // let result4 = document.getElementById("result4");
    // result4.innerText = main("10000"); // return: 50005000
}