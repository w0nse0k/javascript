/**
 * <h3>JavaScript Object Prototypes</h3>
 * @module
 * @see https://www.w3schools.com/js/js_object_prototypes.asp
 */
// object constructor
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// object contstructor에 properties 추가
Person.prototype.nationality = "English";

// object contstructor에 methods 추가
Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

console.log(myFather);
console.log(myFather.nationality);
console.log(myMother.name());

const prototype1 = Object.getPrototypeOf(myFather);
const prototype2 = Object.getPrototypeOf(myMother);
console.log(prototype1 === prototype2);
console.log(prototype1);
