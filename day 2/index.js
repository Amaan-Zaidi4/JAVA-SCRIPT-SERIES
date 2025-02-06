let a=20;
console.log(a);// we got output 20 here //

let postfix=20;
console.log(postfix++);// we got output 20 here increment happen but we call postfix value
// first that's why we got same output 20 //

let postfix1=20;
console.log(postfix1++,postfix1);// we got output 20 21 here increment happen we got 20 
// because we call postfix value first but for next postfix1 we got 21 incremnet  by 1   beacuse 
// in past increment happen.//

let prefix=20;
console.log(++prefix);// we got output 21 because first increment is done by 1 and than we call prefix//


let prefix1=20;
console.log(++prefix1,prefix1);// we got output 21 21 because first increment is
//  done by 1 and than we call prefix1 and now the value for prefix1 is 21 so we got 21 again//

let a1=20;
console.log(++a1,a1,a1++,++a1,a1,a1++,a1++,++a1,++a1); 
// query 1 we got the output 21 21 21 23 23 23 24 26 27 //

let a2=20;
console.log(a2--);//we got output 20 post decrement//

let a3=20;
console.log(a3--,a3,--a3,--a3,a3--,a3,a3,a3,--a3,a3--,a3--);
// query 2 we got the output 20 19 18 17 17 16 16 16 15 15 14 //

let a4=20;
console.log(++a4,a4,--a4,a4--,a4--,a4,a4,a4--,a4++,++a4,++a4,a4++,--a4);
// query 3 we got the output 21 21 20 20 19 18 18 18 17 19 20 20 20 //

let a5=15;
let b5=20;
console.log( a5 > b5 && b5 < a5);// we got the output false logical operators //

let a6=20;
let b6=20;
console.log(a6 === b6 && b6 == a6);// we got the output true //

let a7=20;
let b7=20;
console.log(a7 != b7 && b7 != a7);// we got the output false //

let a8=20;
let b8="20";
console.log(a8 !== b8 && b8 == a8);// we got the output true //

let a9=20;
let b9="20";
console.log(a9 === b9 || b9 == a9);// we got the output true //

let a10=20;
let b10="20";
console.log(!true);// we got the output false //

let a11=20;
let b12="20";
console.log(!false);// we got the output true //

 

