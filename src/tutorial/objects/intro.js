/**
 * <h3>JavaScript Objects</h3>
 * In JavaScript, Objects are King.
 * If you Understand Objects, you Understand JavaScript.
 * In JavaScript, almost "everything" is an object.
 * @module
 * @see https://www.w3schools.com/js/js_object_intro.asp
 */

const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};
console.log(car);

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person1);

// Create an Object
const person2 = {};

// Add Properties
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

// object methods
const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person3.fullName());
