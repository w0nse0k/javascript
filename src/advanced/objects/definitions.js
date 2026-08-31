/**
 * <h3>JavaScript Object Definitions</h3>
 * @module
 * @see https://www.w3schools.com/js/js_object_definition.asp
 */
// JavaScript Object.create()
const person = {
  firstName: "John",
  lastName: "Doe",
};

// Create new Object
const man = Object.create(person);
console.log(man);
console.log(man.firstName);
console.log(Object.getPrototypeOf(man) === person);

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];

// fromEntries: 배열에서 object 생성
const myObj = Object.fromEntries(fruits);
console.log(myObj);

// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith", hairColor: "Gold" };

// Assign Source to Target
Object.assign(person1, person2); // person1 <- person2
console.log(person1);
console.log(person2);

/*
 * JavaScript Objects are Mutable.
 * They are addressed by reference, not by value.
 */
//Create an Object
const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Try to create a copy
const x = person3;

// This will change age in person:
x.age = 10;

console.log(person3);
