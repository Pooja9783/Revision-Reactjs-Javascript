//array is collection of items

let arr = [5, 2, 4, 1, 3];
// console.log(arr);

//toString() -----Convert array to a string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let newFruits = fruits.toString();
console.log("fruits:--", newFruits);

//join() ----Convert array to a string but in join we can add anything--like [/, *]
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let newFruits2 = fruits.join(" * ");
console.log("fruits3:--", newFruits2);

//pop() ------removes last element of array
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.pop();
console.log("fruits3:--", fruits3);

//push() -------at element at the end of array
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.push("Grapes");
console.log("fruits4:--", fruits4);

//shift() ----removes the first element
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.shift();
console.log("fruits5:--", fruits5);

//unshift() ----add new element in an array at the begining
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.unshift("Musk Melon");
console.log("fruits6:--", fruits6); //its returns a new array;
