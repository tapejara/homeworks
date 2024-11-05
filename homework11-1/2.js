const main = function(input1, input2) {

    // ***아래 영역만 작성***
    const array1 = input1.split(' ');
    const array2 = input2.split('/');
    const bucket = [];
    for(let i = 0; i < Number(array1[0]); i++ ) {
        bucket.push(0);
    }
    for(let element of array2) {
        let split = element.split(' ');
        let j = Number(split[1]) - Number(split[0]) + 1;
        let k = Number(split[0]) - 1;
        bucket.splice(k,j)
        for(let l = 0; l < j; l++ ) {
            bucket.splice(k,0,split[2]);
        }
    }
    return bucket;


    // *********************

}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "2번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("5 4", "1 2 3/3 4 4/1 4 1/2 2 2"); // return: 1 2 1 1 0
    let result2 = document.getElementById("result2");
    result2.innerText = main("3 1", "0 0 0"); // return: 0 0 0
    let result3 = document.getElementById("result3");
    result3.innerText = main("10 2", "1 5 1/6 10 2"); // return: 1 1 1 1 1 2 2 2 2 2
    let result4 = document.getElementById("result4");
    result4.innerText = main("3 3", "1 1 1/2 2 2/3 3 3"); // return: 1 2 3
}