const firstOrder = () => console.log("first order function");
const HOF = (returnFirstOrderFun) => returnFirstOrderFun();
HOF(firstOrder);
