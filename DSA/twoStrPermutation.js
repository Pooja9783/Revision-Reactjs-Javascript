function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim().split("");
  let str2 = input[1].trim().split("");
  //   console.log(str1, str2);
  str1.sort();
  str2.sort();
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }
  if (count > 0) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`amit
mtiasaa`);
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
