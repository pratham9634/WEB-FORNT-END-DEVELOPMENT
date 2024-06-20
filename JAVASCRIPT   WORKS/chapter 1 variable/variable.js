//variables var
var a =1;
console.log(a)
//variables let
let b =3;
console.log(b);
//variables const 
const c = 4;
console.log(c)

//diffrense bettwenn var let 
var a = 5 ;
var a = 6 ;//this can be uptaded and re decleared//
console.log(a);
//but let can't be re decleared but can be updated
// let b =7;
// console.log(b);

{
  console.log(a); //var is goblale scope 
}

{
  let b = 8;
  console.log(b)//the are bloack scope not gobal scope
} 

//prefer let over var

