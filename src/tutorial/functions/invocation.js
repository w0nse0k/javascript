/**
 * <h3>Invoking JavaScript Functions</h3>
 * @module
 * @see https://www.w3schools.com/js/js_function_invocation.asp
 */
// not returning anything
function sayHello1() {
  console.log("Hello World");
}
const result = sayHello1();
console.log(result); // return value가 없으면 undefined

// returns "Hello World"
function sayHello2() {
  return "Hello World";
}

const message = sayHello2(); // ()를 사용하면 함수를 호출하고 리턴을 받는다.
console.log(message);

const f2 = sayHello2; // f2 은 sayHello2 함수의 reference 를 갖는다.
console.log(f2); // 함수 자체의 reference
console.log(f2()); // 함수를 호출하고 리턴 값

console.log(f2 === sayHello2); // true, f2 와 sayHello2 는 같은 reference 를 갖는다.
