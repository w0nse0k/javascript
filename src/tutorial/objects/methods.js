/**
 * <h3>JavaScript Object Methods</h3>
 * Object Methods.
 * methods는 object에 행하는 액션이다.
 * methods는 property 값으로 저장되는 함수이다.
 * @module
 * @see https://www.w3schools.com/js/js_object_methods.asp
 */

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Adding a Method to an Object
person.name = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person);
console.log(person.name());
