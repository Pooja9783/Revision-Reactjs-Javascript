var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [1, 2, 3, 4, 5, 6];
let res;
let ans = [];
for (let i = 0; i < arr1.length; i++) {
  res = arr1[i] + arr2[i];
  ans.push(res);
}
console.log(ans);
