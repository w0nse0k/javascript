/**
 * <h3>JavaScript Function apply()</h3>
 * call()과 같은 일을 한다. arguments를 array로 전달
 * @module
 * @see https://www.w3schools.com/js/js_function_apply.asp
 */
const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.fullName.call(person1, "Oslo", "Norway"));
console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));
