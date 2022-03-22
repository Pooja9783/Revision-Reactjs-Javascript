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
