const multipleFun = (a, b, c) => a + b + c;
console.log(multipleFun(1, 2, 3));

const curryFun = (a) => (b) => (c) => a * b * c;
console.log(curryFun(10)(20)(30));
