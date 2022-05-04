function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  for (let i = 0; i < n; i++) {
    let N = +input[line++];
    let str = input[line++].trim().split("");
    cipherStr(N, str);
  }
}
function cipherStr(N, str) {
  let string = "";

  for (let i = 0; i < N; i++) {
    let count = 1;

    while (i < N && str[i] == str[i + 1]) {
      count++;
      i++;
    }
    str[i] += count;
    string += str[i];
  }
  console.log(string);
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
6
a2b1c2
6
a2z1a2`);
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
