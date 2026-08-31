/**
 * <h3>JavaScript Closures</h3>
 * @module
 * @see https://www.w3schools.com/js/js_function_closures.asp
 */
// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();
console.log(counter);

// closure: 부모 함수가 종료된 후에도 부모 함수의 local variable에 접근할 수 있는 함수
function myCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const add2 = myCounter();
add2();
add2();
console.log(add2());

const add3 = myCounter();
console.log(add3(), add3());

// Modern Alternative: Private Class Fields
class Counter {
  #count = 0;

  increment() {
    this.#count++;
    return this.#count;
  }
}

const myCounter2 = new Counter();
console.log(myCounter2.increment());
