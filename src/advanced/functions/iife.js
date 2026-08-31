/**
 * <h3>Self-Invoking Functions</h3>
 * Immediately Invoked Function Expressions. (IIFE)
 * function declaration 과 call을 한번에. 한번만 호출 가능
 * @module
 * @see https://www.w3schools.com/js/js_function_iife.asp
 */
(function () {
  // text 변수가 함수의 local variables가 된다.
  const text = "Hello! I called myself.";
  console.log(text);
})();
// 함수 밖에서 text는 없다.

// self invoking 함수도 parameter를 받거나 리턴할 수 있다.
const text = ((name) => {
  return "Hello " + name;
})("John Doe");
console.log(text);

// recursive
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
const result = factorial(5);
console.log(result);

const result2 = (function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
})(5);
console.log(result2);
