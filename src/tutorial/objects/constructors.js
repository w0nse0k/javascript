/**
 * <h3>JavaScript Object Constructors</h3>
 * @module
 * @see https://www.w3schools.com/js/js_object_constructors.asp
 */
function Person(first, last, age, eyecolor, nationality = "Korean") {
  this.species = "Human"; // default values
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = nationality;
  this.fullName = function () {
    // constructor function methods
    return this.firstName + " " + this.lastName;
  };
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green", "English");

console.log(myFather);
console.log(myMother);
console.log(myFather.fullName());
