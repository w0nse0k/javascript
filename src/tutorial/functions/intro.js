/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * <h3>JavaScript Functions</h3>
 * @module
 * @see https://www.w3schools.com/js/js_function_intro.asp
 */
function sayHello() {
  return "Hello, World!";
}

const message = sayHello();
console.log(message);

function add(a, b) {
  return a + b;
}

let sum1 = add(5, 5);
let sum2 = add(50, 50);
console.log(sum1);
console.log(sum2);

// local variable of a function
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName
