const main = function(input) {    

    const array = input.split('');
    for(let i = 0; i < array.length; i++) {
        if(array[i]=="c" && array[i+1]=="=") {
            array.splice(i+1, 1);
        } else if(array[i]=="c" && array[i+1]=="-") {
            array.splice(i+1, 1);
        } else if(array[i]=="d" && array[i+1]=="z" && array[i+2]=="=" ) {
            array.splice(i+1, 2);
        } else if(array[i]=="d" && array[i+1]=="-") {
            array.splice(i+1, 1);
        } else if(array[i]=="l" && array[i+1]=="j") {
            array.splice(i+1, 1);
        } else if(array[i]=="n" && array[i+1]=="j") {
            array.splice(i+1, 1);
        } else if(array[i]=="s" && array[i+1]=="=") {
            array.splice(i+1, 1);
        } else if(array[i]=="z" && array[i+1]=="=") {
            array.splice(i+1, 1);
        }
    }
    return array.length;
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