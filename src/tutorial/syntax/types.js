/* eslint-disable no-unassigned-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * <h3>JavaScript Datatypes</h3>
 * JavaScript에 8개의 데이터 타입이 있다.
 * 1. string
 * 2. number
 * 3. boolean
 * 4. bigint : bigint은 정수만 표현 가능하며, 2^53-1보다 큰 정수를 표현할 수 있다.
 * 5. undefined: undefined은 아직 할당되지 않은 변수의 값이다.
 * 6. null: null은 object로 취급된다.
 * 7. symbol: symbol은 고유하고 변경 불가능한 primitive 값이다.
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
