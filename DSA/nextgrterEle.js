function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  for (let i = 0; i < n; i++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    nextgreaterElement(N, arr);
  }
}
function nextgreaterElement(n, arr) {
  var s = [];
  let result = [];
  let res = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    if (s.length != 0) {
      while (s.length != 0 && s[s.length - 1] <= arr[i]) {
        s.pop();
      }
    }
    res[i] = s.length == 0 ? -1 : s[s.length - 1];
    s.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(res[i]);
  }
  console.log(result.join(" "));
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`1
4
1 3 2 4`);
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
