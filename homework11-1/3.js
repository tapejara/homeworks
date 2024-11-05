const main = function(input1, input2) {    

    // ***아래 영역만 작성***
    const array1 = input1.split(' ');
    const array2 = input2.split('/');
    const bucket = [];
    for(let i = 1; i <= Number(array1[0]); i++) {
        bucket.push(i);
    } 
    for(let element of array2) {
        let split = element.split(' ');
        let i = Number(split[0])-1;
        let j = Number(split[1])-1;
        let k = Number(bucket[i]);
        let l = Number(bucket[j]);
        bucket.splice(i,1,l);
        bucket.splice(j,1,k);
    } 
    return bucket;


    // *********************

}

window.onload = function() {
    let title = document.getElementById("title");
    title.innerText = "3번 문제";

    let result1 = document.getElementById("result1");
    result1.innerText = main("5 4", "1 2/3 4/1 4/2 2"); // 3 1 4 2 5                        
    let result2 = document.getElementById("result2");
    result2.innerText = main("10 10", "1 2/2 1/5 1/9 5/3 10/1 3/8 6/3 6/2 8/9 4"); // 10 6 8 1 9 5 7 2 4 3
    let result3 = document.getElementById("result3");
    result3.innerText = main("2 1", "1 2"); // 2 1
    let result4 = document.getElementById("result4");
    result4.innerText = main("100 5", "1 2/2 3/3 4/4 5/5 6"); // 2 3 4 5 6 1 7 8 9 10 11 12 13 14 15 16 17 18 19 20 ...
}