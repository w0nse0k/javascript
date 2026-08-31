/**
 * <h3>JavaScript Callbacks</h3>
 * @module
 * @see https://www.w3schools.com/js/js_callback.asp
 */
// Asynchronous Callbacks. 나중에 실행된다. main 프로그램은 계속 진행한다.
setTimeout(myFunction, 2000);
console.log("계속 진행");

function myFunction() {
  console.log("I love you");
}

const numbers = [45, 4, 9, 16, 25];
let txt = "";
// Synchronous Callbacks. 즉시 실행된다. 끝날때까지 blocking
numbers.forEach(myFunction2);
console.log(txt);

function myFunction2(value) {
  txt += value + "<br>";
}

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction3);
console.log(numbers2);

function myFunction3(value) {
  return value * 2;
}
