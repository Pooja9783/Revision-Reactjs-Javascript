function runProgram(input) {
  input = input.trim().split("\n");
  let [n, x] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  nody(n, x, arr);
}
function nody(n, x, arr) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] >= x) {
      count++;
    }
  }
  if (count < 0) {
    console.log(0);
  } else {
    console.log(count);
  }
}
function sortOut(n, arr) {}
if (process.env.USERNAME === "lenovo") {
  runProgram(`7 6
4 3 7 6 7 2 2
`);
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
