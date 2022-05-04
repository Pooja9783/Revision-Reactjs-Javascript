function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  let str = [];
  for (let i = 0; i < n; i++) {
    let arr = input[line++].trim().split(" ").join(" ");
    str.push(arr);
  }
  countNames(str);
}
function countNames(arr) {
  //   console.log(arr);
  arr.sort();
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = obj[arr[i]] + 1;
    }
  }
  //   console.log(obj);
  for (let key in obj) {
    console.log(key + " " + obj[key]);
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`3
masai
school
masai`);
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
