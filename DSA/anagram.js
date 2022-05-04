function runProgram(input) {
  input = input.trim().split("\n");
  let str1 = input[0].trim().split(" ").join("").split("").sort();
  let str2 = input[1].trim().split(" ").join("").split("").sort();
  let count = 0;
  // console.log(str1);
  // console.log(str2);

  if (str1.length !== str2.length) {
    console.log("False");
  } else {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
      }
    }

    if (count > 0) {
      console.log("False");
    } else {
      console.log("True");
    }
  }
}
if (process.env.USERNAME === "lenovo") {
  runProgram(`sachin tendulkar is sachin tendulkar
si sachin hsacin tendulkar tedulkad`);
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
