const main = function(input) {    

    const answer =[];
    const string = input.toUpperCase();
    const array = string.split('');
    const map =new Map();
    for(let c of array) {
        if(map.has(c) == false) {
            map.set(c,1);
        } else {
            let i = map.get(c) + 1;
            map.set(c,i);
        }
    }
    let i = Math.max(...map.values());
    for(let value of map.values()) {
        if(value == i) {
            answer.push(value);
        }
    }
    if(answer.length == 1) {
        for(let key of map.keys()) {
            if(map.get(key) == i) {
                return key;
            }
        }
    } else {
        return "?";
    }
    
    /*
    https://codechacha.com/ko/javascript-lowercase-uppercase/ - 먼저 읽고

    아이디어1 - dictionary
    {m:1, i:4, s:4, p:1}
    
    아이디어2 - 이중배열
    [[m,1], [i,4], [s,4], [p,1]]
    */
}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "3번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("Mississipi"); // result: ?
    let result2 = document.getElementById("result2");
    result2.innerText = main("zZa"); // result: Z
    let result3 = document.getElementById("result3");
    result3.innerText = main("z"); // result: Z
    let result4 = document.getElementById("result4");
    result4.innerText = main("baaa"); // result: A
}