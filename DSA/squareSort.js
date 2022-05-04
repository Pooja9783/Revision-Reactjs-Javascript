function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  for (let i = 0; i < n; i++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    squareSort(arr);
  }
}

function squareSort(arr) {
  let sq = arr.map((e) => e ** 2);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (sq[j] > sq[j + 1]) {
        let temp = sq[j];
        sq[j] = sq[j + 1];
        sq[j + 1] = temp;
        let temp2 = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp2;
        // [sq[j], sq[j + 1]] = [sq[j + 1], sq[j]];
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  //   console.log(sq);
  console.log(arr.join(" "));
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`1
5
-2 3 1 -4 6
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
