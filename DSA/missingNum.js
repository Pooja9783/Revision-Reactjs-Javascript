function runProgram(input) {
  input = input.trim().split("\n");
  let arr = input[0].trim().split(" ").map(Number);
  let n = arr.length;
  let formula = ((n + 1) * (n + 2)) / 2;
  for (let i = 0; i < arr.length; i++) {
    formula -= arr[i];
  }
  console.log(formula);
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`4 5 1 3`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
