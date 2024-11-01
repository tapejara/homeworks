const main = function(input) {    
    let num = parseInt(input); // N

    // ***아래 영역만 작성***
    let star = '';
    for(let i = 0; i < num; i++) {
        for(let j = num-1 ; j > i; j--) {
            star += ' ';
        }
        for(let k = 0; k <= i; k++) {
            star +='*';
        }
        star += '\n'
    }console.log(star); 
    return star;
    
    

    // *********************
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "3번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("3");                            
    let result2 = document.getElementById("result2");
    result2.innerText = main("5");
    let result3 = document.getElementById("result3");
    result3.innerText = main("8");
    let result4 = document.getElementById("result4");
    result4.innerText = main("14");
}