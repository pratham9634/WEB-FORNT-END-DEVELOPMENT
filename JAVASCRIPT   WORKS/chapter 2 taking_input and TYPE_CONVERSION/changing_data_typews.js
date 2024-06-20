// type conversion  = change the data type of value to anothoer(string,number,boolean)

let  x = "pizza";
let  y = "pizza";
let  z = "pizza";

console.log(x,typeof(x) )
console.log(y,typeof(y) )
console.log(z,typeof(z) )
// output will same all are string

// now we will convert string to number and boolean
let a = "123"; //this is a string and it convert into number
let b = 123;   //this is number is convert into string
let c = "pizza" // this is string and it convert into boolean

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a,typeof(a) )
console.log(b,typeof(b) )
console.log(c,typeof(c) )