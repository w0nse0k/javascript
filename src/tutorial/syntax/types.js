/**
 * <h3>JavaScript Datatypes</h3>
 * JavaScript에 8개의 데이터 타입이 있다.
 * 1. string
 * 2. number
 * 3. boolean
 * 4. bigint
 * 5. undefined
 * 6. null
 * 7. symbol
 * 8. object
 * @module
 * @see https://www.w3schools.com/js/js_types.asp
 */

// string
let color = "Yellow"; // single quotes, double quotes 모두 가능
let lastName = "Johnson";

// number. 64bit floating point, 정수와 실수 모두 포함
let length = 16;
let weight = 7.5;

// boolean
let b1 = true;
let b2 = false;

// object
const person = { firstName: "John", lastName: "Doe" };

// array object
const cars = ["Saab", "Volvo", "BMW"];

// undefined. 아직 할당하지 않음
let ud;

// null object. null로 할당함
let nl = null;

console.log("typeof color:", typeof color);
console.log("typeof length:", typeof length);
console.log("typeof b1:", typeof b1);
console.log("typeof person:", typeof person);
console.log("typeof cars:", typeof cars);
console.log("typeof ud:", typeof ud);
console.log("typeof nl:", typeof nl); // null is an object
