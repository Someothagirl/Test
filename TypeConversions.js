//Pre determined constants
let a;
let b;
let c;
let d;

a = String("19");
b = Number("19");
c = Boolean("");
d = Boolean("19");

console.log(a, typeof a); // String conversion
console.log(b, typeof b); // Numeric conversion
console.log(c, typeof c); // False boolean conversion
console.log(d, typeof d); // True boolean conversion

//Prompt constants
let age = prompt("How old are you?");
console.log(age, typeof age); // String conversion

age = (Number(age))
console.log(age, typeof age); // Numeric conversion

age = (Boolean(age))
console.log(age, typeof age); // True boolean conversion

age = (Boolean())
console.log(age, typeof age); // False boolean conversion
