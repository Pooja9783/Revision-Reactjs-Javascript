function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let line = 1;
  let st = [];
  let que = [];
  for (let i = 0; i < n; i++) {
    let arr = input[line++].trim().split(" ");
    // console.log(arr);
    if (arr[0] === "E") {
      st.push(arr[1]);
    } else if (arr[0] === "D") {
      st.pop();
    } else {
      console.log("Empty");
    }
  }
  let res = st;
  for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
  }
}

// Empty
// 74
// 24

if (process.env.USERNAME === "lenovo") {
  runProgram(`20
D
E 74
E 24
E 68
E 100
E 90
E 88
E 10
E 9
E 65
E 65
E 24
E 74
D
E 68
E 10
E 65
D
E 74
E 71`);
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
