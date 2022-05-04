let n = 100;
let j;
for (let i = 2; i < n; i++) {
  let c = true;
  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      c = false;
      break;
    }
  }
  if (c) {
    // console.log(i);
  }
}
