function callBackFunction(name) {
  console.log("Hello " + name);
}

function outerFunc() {
  let name = "Pooja";
  callBackFunction(name);
}

outerFunc();
