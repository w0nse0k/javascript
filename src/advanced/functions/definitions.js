/**
 * <h3>JavaScript Function Definitions</h3>
 * - Function declarations (함수 선언, Hoisting)
 * - Function expressions (함수를 변수에 저장)
 * @module
 * @see https://www.w3schools.com/js/js_function_definition.asp
 */

console.log(func1(3, 4)); // ok
// console.log(func2(3, 4)); // error

// function declaration (Hoisting)
function func1(x, y) {
  return x * y;
}

// function expression (anonymous)
const func2 = function (x, y) {
  return x * y;
};

// function expression (arrow)
const func3 = (x, y) => x * y;

console.log(func2(4, 5));
console.log(func3(5, 6));
