// Arrays //


var arr=[1, 2,3, 4,5];
console.log(arr.length);

var arr=[1, 2,3, 4,5];
console.log(arr);

const arr1=["java","script"];
let res = arr1.push("day6");// push //
console.log(arr1);


let arr2=["java","script","day6"];
let res2 = arr2.slice(1,2); // slice //
console.log(res2);



let arr3=["java","script","day6"];
let res3 = arr3.toString(); // to string //
console.log(res3);


let arr4=["java","script","day6"];
let res4 = arr4.shift(); // shift //
console.log(res4);

let arr5=[1,2,3,4];
let res5=arr.map(a=>a+2);// map //
console.log(res5);

let arr6=["1","2","3","4"];
let res6=arr6.pop();// pop //
console.log(res6);


let arr7=["amaan","zaidi","dad"];
let res7=arr7.filter(word=>word.length>3);// filter //
console.log(res7);

let arr8=["1","2","3","4"];
let res8=arr8.find(word=>word==2);// find //
console.log(res8);

let arr9=["1","2","3","4"];
let res9=arr9.findIndex(word=>word==3);// findindex //
console.log(res9);


let arr10=["1","2","3","4"];
let res10=arr10.includes(5);// includes //
console.log(res10);


let arr11=["1","2","3","4"];
let res11=arr11.reverse();// reverse //
console.log(res11);



let arr12=[1,2,3,4];
let res12=arr12.unshift(10); // unshift //
console.log(arr12);


let arr13=[1,2,3,4];
let res13= delete(arr13[3]);// delete //
console.log(arr13);








