/**
 * <h3>JavaScript Numbers Methods</h3>
 * @module
 * @see https://www.w3schools.com/js/js_number_methods.asp
 */
// toFixed() : 소수점 자릿수 지정
let x = 9.656;
console.log("x.toFixed(0)=", x.toFixed(0));
console.log("x.toFixed(2)=", x.toFixed(2));
console.log("x.toFixed(4)=", x.toFixed(4));

// Number() : 숫자로 변환
console.log("Number(true)=", Number(true));
console.log("Number(false)=", Number(false));
console.log("Number('10')=", Number("10"));
console.log("Number('John')=", Number("John"));

// parseInt() : 문자열을 정수로 변환
console.log("parseInt('-10')=", parseInt("-10"));
console.log("parseInt('10.33')=", parseInt("10.33"));
console.log("parseInt('years 10')=", parseInt("years 10"));

// parseFloat() : 문자열을 부동소수점 숫자로 변환
console.log("parseFloat('10')=", parseFloat("10"));
console.log("parseFloat('10.33')=", parseFloat("10.33"));
console.log("parseFloat('years 10')=", parseFloat("years 10"));

// isInteger() : 정수인지 확인
console.log("Number.isInteger(10)=", Number.isInteger(10));
console.log("Number.isInteger(10.5)=", Number.isInteger(10.5));
console.log("Number.isInteger('hello')=", Number.isInteger("hello"));

// isNaN() : 숫자가 아닌지 확인. 숫자가 아니면 true, 숫자이면 false
console.log("isNaN('Hello')=", isNaN("Hello"));
console.log("isNaN(123)=", isNaN(123));
