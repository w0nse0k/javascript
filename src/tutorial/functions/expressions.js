/**
 * <h3>JavaScript Function Expressions</h3>
 * anonymous function: 이름이 없는 함수.
 * function expression: anonymous function을 변수에 할당한 것.
 * Function Declaration은 hoisting이 발생한다. (함수 선언이 코드의 최상단으로 끌어올려진 것처럼 동작)
 * Function Expression은 hoisting이 발생하지 않는다. (선언 이전에 호출 불가)
 * @module
 * @see https://www.w3schools.com/js/js_function_expressions.asp
 */

// Function Expression. anonymous함수를 변수에 할당
const multiply = function a(a, b) {
  return a * b;
};

console.log(multiply(5, 10)); // 50

// 다른 함수를 인자로 받는 함수 (First-class function, 일급 함수)
function run(fn) {
  console.log(fn());
}

const sayHello = function () {
  return "Hello";
};

run(sayHello); // Hello

run(function () {
  // anonymous function을 인자로 넣는다.
  return "Hello from anonymous function";
});
