/**
 * <h3>JavaScript Comparison</h3>
 * Javascript Comparison Operators
 * ==, != : 값만 비교
 * ===, !== : 값과 타입 모두 비교
 * 비교는 항상 === 으로 한다. == 사용 금지!!
 * @module
 * @see https://www.w3schools.com/js/js_comparisons.asp
 */

const x = 5;

// ==
console.log("x == 8", x == 8); // false
console.log("x == 5", x == 5); // true
console.log("x == '5'", x == "5"); // true

// ===
console.log("x === 5", x === 5); // true
console.log("x === '5'", x === "5"); // false. 타입이 다르다.

// !=
console.log("x != 8", x != 8); // true
console.log("x != 5", x != 5); // false
console.log("x != '5'", x != "5"); // false

// !==
console.log("x !== 5", x !== 5); // false
console.log("x !== '5'", x !== "5"); // true. 타입이 다르다.
