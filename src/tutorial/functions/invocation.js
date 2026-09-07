/**
 * <h3>Invoking JavaScript Functions</h3>
 * @module
 * @see https://www.w3schools.com/js/js_function_invocation.asp
 */
// calling vs referencing a function
function sayHello() {
  return "Hello World";
}
// calling the function
sayHello(); // "Hello World"

// referencing the function
let text = sayHello;
console.log("text():", text()); // "Hello World"
