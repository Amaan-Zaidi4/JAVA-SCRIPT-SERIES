let student={ // objects //
    name:"amaan zaidi",
    age:24,
    gender:"male"

}
console.log(student.name);
console.log(student.age);
console.log(student.gender);

let str ="amaan";
console.log(...str);// spread operator //

let obj={
    name:'ansh',
    age:45
}
let obj1={
    iq:1
}
let person={
    ...obj,
    ...obj1,
    gender:"male"
}
console.log(person);


