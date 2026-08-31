/**
 * <h3>Arrow Functions</h3>
 * (Lambda Functions, Lambda Expressions)
 * function expression의 축약형.
 * arrow function은 object의 메서드로는 쓰지 않는다. this를 바인드하지 않는다.
 * @module
 * @see https://www.w3schools.com/js/js_arrow_function.asp
 */

// function expression. anonymous function을 변수에 할당
const add1 = function (a, b) {
  return a + b;
};

// arrow function. function expression의 축약형
const add2 = (a, b) => {
  return a + b;
};

// arrow function. 함수가 return 한 줄이면 {}와 return 생략 가능
const add3 = (a, b) => a + b;
console.log(add3(3, 4));

// parameter가 없는 함수
const hello1 = () => "Hello World";
console.log(hello1());

// parameter가 1개 있는 함수
const hello2 = (val) => "Hello " + val;
console.log(hello2("Jacob"));

// hello1과 hello2 기능을 하나로
const hello3 = (val = "World") => "Hello " + val;
console.log(hello3());
console.log(hello3("Rachel"));
