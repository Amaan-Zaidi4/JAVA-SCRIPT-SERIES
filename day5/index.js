// string //


var num = "i am developer and designer";
let res = num.indexOf("am");// index of //
console.log(res);// we got the output 2 //

var num = "i am developer and designer";
let res1 = num.indexOf("designer");// we got the output 19 //
console.log(res1);

var num = "i am developer and designer";
let res2 = num.indexOf("Designer");
console.log(res2);// // we got the output -1 if the element is not defined we lawys got the output -1  //


var num = "i am developer and designer and designer";
let res3 = num.lastIndexOf("designer");// last index of //
console.log(res3);// we got the output 32 always find the indexing of last of that particular element //

var num = "i am developer and designer and designer";
let res4 = num.indexOf("designer");
console.log(res4);// we got the output 19 //

var num = "i am developer and designer and designer";
let res5 = num.indexOf("designer", 20);
console.log(res5);// we got the output 32 because we are finding the indexing after 20 //

var num = "i am developer and designer and designer";
let res6 = num.indexOf("developer", 20);
console.log(res6);// we are getting -1 because after 20 indexing there is no developer //




let str4 = "hello";
let str5 = "world";
let res7 = str4.concat(str5);// concatenation //
console.log(res7);// we got the output hello world //


var num = "i am developer and designer and designer";
let res20= num.slice(10,20);// slice //
console.log(res20);// we got the output oper and d //



var num = "i am developer and designer and designer";
let res21= num.slice(10,-20);// taking negative indexing from back side //
console.log(res21);// we got the output oper and d //

var num = "i am developer and designer and designer";
let res22= num.substring(10,20);// sub string never takes the negative value //
console.log(res22);// we got the output oper and d //

var num = "i am developer and designer and designer";
let res23= num.substring(10,30);// sub string //
console.log(res23); // we got the output oper and designer an //



var num ="i am developer and designer and designer";
let res24= num.replace(" ","/");// replace replace first space from slash //
console.log(res24);// we ot the output 


var num = "i am developer and designer and designer";
let res25= num.replaceAll("d","D");// replace all //
console.log(res25);



var num = "       i am developer and designer and designer      ";
let res26= num.trim();// trim  //
console.log(res26);


var num ="1,2,3,4,5,6,7,8";
let res27 = num.split(",");// split //
console.log(res27);


var num ="1,2,3,4,5,6,7,8";
let res28 = num.split("5");
console.log(res28);


var num = "i am developer and designer and designer";
console.log(num.length);