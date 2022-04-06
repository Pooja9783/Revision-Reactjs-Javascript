function test(callback) {
  callback();
}

function sayHello(name) {
  console.log(`Hello ${name}`);
}

function displayName() {
  return "pooja";
}

test(sayHello);

const length = 9;
const numbers = [];
for (let i = 0; i <= length; i++) {
  console.log(i, numbers.push(i + 1));
}
