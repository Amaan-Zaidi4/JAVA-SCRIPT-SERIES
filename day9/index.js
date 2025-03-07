console.log("java script day 9");

// Map  //

let day9 = new Map();

day9.set("name","amaan");
day9.set("age",24);
day9.set("gender",true);


console.log(day9);


// get //

let day10 = new Map();

day10.set("name","amaan");
day10.set("age",24);
day10.set("gender",true);


console.log(day10.get("age"));

 // has // 

let day11 = new Map();

day11.set("name","amaan");
day11.set("age",24);
day11.set("gender",true);


console.log(day11.has("age"));

// clear //

let day12 = new Map();

day12.set("name","amaan");
day12.set("age",24);
day12.set("gender",true);
day12.clear();
console.log(day12);


// delete //
let day13 = new Map();

day13.set("name","amaan");
day13.set("age",24);
day13.set("gender",true);
day13.delete("age");
console.log(day13);


// set //
 
var set1 = new Set();

set1.add("amaan");
set1.add(24);
set1.add(true);

console.log(set1);

// values //


var set1 = new Set();

set1.add("amaan");
set1.add(24);
set1.add(true);

console.log(set1.values());
console.log(set1.has("amaan"));// has //
console.log(set1.entries());// enteries //
set1.clear(); // clear //
console.log(set1);


var set1 = new Set();

set1.add("amaan");
set1.add(24);
set1.add(true);
set1.delete(24); // delete //
console.log(set1.size);




