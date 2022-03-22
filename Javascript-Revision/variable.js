//variables are container for storing data.

var x; //declaration;
x = 10; // initialization;

//in javascript we have three types of variables.
//var - global scope
//let - block scope
//const - block scope

//global scope ~~~~ a variable is declared at the top of a program or
//out side of a function is considered a global scope variable....
var a = 10;
console.log("global Scope ~~~~", a);
//block scope ~~~ a block scope variable can access only in immediate block.
if (true) {
  let b = 15;
  console.log("Block Scope ~~~~", b);
}
//Local scope ~~~~ a variable can also have a local scope it can only be accessed within a function.
function y() {
  let c = 20;
  console.log("local Scope ~~~~", c);
}
y();

//difference between block scope and local scope ?
//block scope and local both writes
