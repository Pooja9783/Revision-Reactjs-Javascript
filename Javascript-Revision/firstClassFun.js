//~~~~~~~~Assign a function to a variable~~~~~~~~~~
const foo = function () {
  //Anonymous Function
  console.log("First Class Function....");
};
foo();

//~~~~~~~~Pass a function as an Argument~~~~~~~~~
function sayHello() {
  return "Hello";
}

function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}

greeting(sayHello, " Javascript");
