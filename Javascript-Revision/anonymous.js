setTimeout(() => {
  console.log("Execute after 1 sec");
}, 1000);

(function () {
  console.log("IIFE");
})();
