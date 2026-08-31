/**
 * <h3>JavaScript Function Arguments</h3>
 * @module
 * @see https://www.w3schools.com/js/js_function_arguments.asp
 */
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
