function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let line = 1;
  for (let i = 0; i < N; i++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    let k = +input[line++];
    pairLessThanK(N, arr, k);
  }
}
function pairLessThanK(N, arr, k) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      console.log(arr[i], arr[j]);
      let s = arr[i] + arr[j];
      if (s < k && s > count) {
        count = s;
      }
    }
  }
  if (count > 0) {
    console.log(count);
  } else {
    console.log(-1);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
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
