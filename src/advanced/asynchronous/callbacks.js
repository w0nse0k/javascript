/**
 * <h3>Asynchronous Callbacks</h3>
 * @module
 * @see https://www.w3schools.com/js/js_async_callbacks.asp
 */
// Synchronous callbacks
// Calculate Function
function calculate(x, y, operation) {
  return operation(x, y);
}

// Add Function
const add = (a, b) => a + b;
// Multiply Function
const multiply = (a, b) => a * b;

let result = calculate(5, 3, add);
console.log(result);
result = calculate(5, 3, multiply);
console.log(result);

// Asynchronous callbacks
const display = () => console.log("Finished!");
setTimeout(display, 1000);
console.log("continue...");

// Callback chains
setTimeout(function () {
  console.log("Task A finished.");
  setTimeout(function () {
    console.log("Task B finished.");
    setTimeout(function () {
      console.log("Task C finished.");
    }, 1000);
  }, 2000);
}, 3000);
