const main = function(input) {    

    const array = input.split('');
    for(let i = 0; i < array.length; i++) {
        if(array[i]=="A") {
            array.splice(i,1,"a");
        } else if(array[i]=="B") {
            array.splice(i,1,"b");
        } else if(array[i]=="C") {
            array.splice(i,1,"c");
        } else if(array[i]=="D") {
            array.splice(i,1,"d");
        } else if(array[i]=="E") {
            array.splice(i,1,"e");
        } else if(array[i]=="F") {
            array.splice(i,1,"f");
        } else if(array[i]=="G") {
            array.splice(i,1,"g");
        } else if(array[i]=="H") {
            array.splice(i,1,"h");
        } else if(array[i]=="I") {
            array.splice(i,1,"i");
        } else if(array[i]=="J") {
            array.splice(i,1,"j");
        } else if(array[i]=="K") {
            array.splice(i,1,"k");
        } else if(array[i]=="L") {
            array.splice(i,1,"l");
        } else if(array[i]=="M") {
            array.splice(i,1,"m");
        } else if(array[i]=="N") {
            array.splice(i,1,"n");
        } else if(array[i]=="O") {
            array.splice(i,1,"o");
        } else if(array[i]=="P") {
            array.splice(i,1,"p");
        } else if(array[i]=="Q") {
            array.splice(i,1,"q");
        } else if(array[i]=="R") {
            array.splice(i,1,"r");
        } else if(array[i]=="S") {
            array.splice(i,1,"s");
        } else if(array[i]=="T") {
            array.splice(i,1,"t");
        } else if(array[i]=="U") {
            array.splice(i,1,"u");
        } else if(array[i]=="V") {
            array.splice(i,1,"v");
        } else if(array[i]=="W") {
            array.splice(i,1,"w");
        } else if(array[i]=="X") {
            array.splice(i,1,"x");
        } else if(array[i]=="Y") {
            array.splice(i,1,"y");
        } else if(array[i]=="Z") {
            array.splice(i,1,"z");
        }
    }
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;
    let g = 0;
    let h = 0;
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    let m = 0;
    let n = 0;
    let o = 0;
    let p = 0;
    let q = 0;
    let r = 0;
    let s = 0;
    let t = 0;
    let u = 0;
    let v = 0;
    let w = 0;
    let x = 0;
    let y = 0;
    let z = 0;
    for(let c of array) {
        if(c =="a") {
            a++;
        } else if(c =="b") {
            b++;
        } else if(c =="c") {
            c++;
        } else if(c =="d") {
            d++;
        } else if(c =="e") {
            e++;
        } else if(c =="f") {
            f++;
        } else if(c =="g") {
            g++;
        } else if(c =="h") {
            h++;
        } else if(c =="i") {
            i++;
        } else if(c =="j") {
            j++;
        } else if(c =="k") {
            k++;
        } else if(c =="l") {
            l++;
        } else if(c =="m") {
            m++;
        } else if(c =="n") {
            n++;
        } else if(c =="o") {
            o++;
        } else if(c =="p") {
            p++;
        } else if(c =="q") {
            q++;
        } else if(c =="r") {
            r++;
        } else if(c =="s") {
            s++;
        } else if(c =="t") {
            t++;
        } else if(c =="u") {
            u++;
        } else if(c =="v") {
            v++;
        } else if(c =="w") {
            w++;
        } else if(c =="x") {
            x++;
        } else if(c =="y") {
            y++;
        } else if(c =="z") {
            z++;
        }
    }
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabet = string.split('');
    const num = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
    const answer = [];
    let max = Math.max(...num);
    for(let element of num) {
        if(element==max) {
            answer.push(element);
        }
    }
    if( answer.length >= 2) {
        return "?";
    } else {
        return alphabet[num.indexOf(max)];
    }
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