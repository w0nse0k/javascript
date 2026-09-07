/**
 * <h3>JavaScript Function Arguments</h3>
 * @module
 * @see https://www.w3schools.com/js/js_function_arguments.asp
 */
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

// arguments : 함수의 매개변수로 전달된 값들을 배열처럼 사용하는 객체
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// Function Rest Parameters
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(x); // 55

// rest parameter는 반드시 마지막에 위치해야 한다.
function myFunction(a, ...args) {
  console.log("a: ", a);
  console.log("args: ", args);
}

myFunction(1, 2, 3, 4, 5);
