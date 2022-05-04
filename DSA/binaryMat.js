function runProgram(input) {
  input = input.trim().split("\n");
  let [m, n] = input[0].trim().split(" ").map(Number);
  let line = 1;
  for (let i = 0; i < m; i++) {
    for (let j = n - 1; j >= 0; j++) {
      let mat = input[n][m].trim().split(" ").map(Number);
      console.log(mat[j][i]);
    }
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`3 2
1 0
0 1
1 1`);
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
