/**
 * <h3>JavaScript Destructuring</h3>
 * @module
 * @see https://www.w3schools.com/js/js_destructuring.asp
 */
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

// Destructuring
let { firstName, lastName } = person;

console.log(firstName, lastName);

// String Destructuring
let name = "W3Schools";
let [a1, a2, a3] = name;
console.log(a1, a2, a3);

// Skipping Array Values
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit1, , , fruit2] = fruits;
console.log(fruit1, fruit2);

// The Rest Property
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a, b, ...rest] = numbers;
console.log(a, b);
console.log(rest);

// Swapping JavaScript Variables
let givenName = "John";
let familyName = "Doe";
[givenName, familyName] = [familyName, givenName];
console.log(givenName, familyName);
