/**
 * <h3>JavaScript Numbers</h3>
 * JavaScript는 숫자 연산에서 문자열을 자동으로 숫자로 변환합니다. 그러나 문자열이 숫자로 변환될 수 없는 경우, 결과는 NaN(Not a Number)입니다.
 * @module
 * @see https://www.w3schools.com/js/js_numbers.asp
 */
let x = 100 / "10";
console.log("x=", x);

// NaN - Not a Number
x = 100 / "Apple"; // NaN
console.log("x=", x); // NaN

// Infinity - 무한대
console.log("1/0=", 1 / 0); // Infinity

// hexadecimal
x = 0xff; // 255
console.log("x=", x);

let myNumber = 32;
let hex = myNumber.toString(16); // 20
let decimal = myNumber.toString(10); // 32
let binary = myNumber.toString(2); // 100000

console.log("hex=", hex);
console.log("decimal=", decimal);
console.log("binary=", binary);
