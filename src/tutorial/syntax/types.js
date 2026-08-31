/**
 * <h3>JavaScript Datatypes</h3>
 * JavaScript에 8개의 데이터 타입이 있다.
 * 7 primitive types and object type
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

// String
let color = "Yellow"; // single quotes, double quotes 모두 가능
let lastName = "Johnson";

// Number. 64bit floating point, 정수와 실수 모두 포함
let length = 16;
let weight = 7.5;

// BigInt. n또는 BigInt()로 선언, 정수만 가능
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345);

// Boolean
let b1 = true;
let b2 = false;

// Object
const person = { firstName: "John", lastName: "Doe" };

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined. 아직 할당하지 않음
let ud;

// Null. null로 할당함
let nl = null;

// Symbol
const s1 = Symbol();
const s2 = Symbol();

console.log("typeof x:", typeof x);
console.log("typeof y:", typeof y);
console.log("typeof b1:", typeof b1);
console.log("typeof b2:", typeof b2);
console.log("typeof person:", typeof person);
console.log("typeof cars:", typeof cars);
console.log("typeof date:", typeof date);
console.log("typeof ud:", typeof ud);
console.log("typeof nl:", typeof nl); // null is an object
if (nl === null) console.log("nl is null");
console.log("typeof s1:", typeof s1);
console.log("typeof s2:", typeof s2);
console.log("s1 === s2:", s1 === s2); // false, because each Symbol is unique

console.log("ud == nl:", ud == nl); // true, 모두 빈 값으로 간주.
console.log("ud === nl:", ud === nl); // false, 타입이 다르다.
