/**
 * <h3>JavaScript Function Parameters</h3>
 * Parameters: function definition의 변수 이름들
 * Arguments: 함수에 전달되는 실제 값들
 * Parameter 규칙
 * - data type를 지정하지 않는다.
 * - arguments의 type checking을 하지 않는다.
 * - arguments의 갯수 checking을 하지 않는다.
 * @module
 * @see https://www.w3schools.com/js/js_function_parameters.asp
 */

// parameters: a, b
function multiply(a, b) {
  return a * b;
}

// arguments: 4, 5
let result = multiply(4, 5); // 4는 a에 5는 b에 전달된다.
console.log(result);

let result2 = multiply(10, 20, 30); // 30은 무시된다.
console.log(result2);

let result3 = multiply(10); // b는 undefined가 되고, 10 * undefined = NaN
console.log(result3);

// default parameter value
function add(x, y = 10) {
  return x + y;
}

console.log(add(5, 20)); // 25
console.log(add(5)); // 15, y의 default value가 사용된다.
