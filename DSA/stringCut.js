function runProgram(input) {
  input = input.trim().split(" \n");
  let str = input[0].trim().split("");
  let mid = Math.floor(str.length / 2);
  let mid2 = Math.round(str.length / 2);
  let a = [];
  let b = [];
  let c = [];
  if (str.length % 2 === 1) {
    for (let i = 0; i < str.length; i++) {
      if (i < mid2 - 1) {
        a.push(str[i]);
      } else if (i == mid2 - 1) {
        b.push(str[i]);
      } else {
        c.push(str[i]);
      }
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      if (i < mid) {
        a.push(str[i]);
      } else {
        c.push(str[i]);
      }
    }
  }
  a.reverse();
  c.reverse();
  let res = a.concat(b, c).join("");

  console.log(res);
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`abcxyz`);
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
