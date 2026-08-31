/**
 * <h3>JavaScript Object Properties</h3>
 * properties는 key:value 쌍이다.
 * object는 properties의 collection이다.
 * properties는 추가, 수정, 삭제할 수 있다.
 * @module
 * @see https://www.w3schools.com/js/js_object_properties.asp
 */

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

// dot notation
console.log(person.age);
console.log(person.firstName);

// bracket notation
console.log(person["age"]);
let n1 = "firstName";

// bracket notation은 property에 변수를 쓸 수 있다.
console.log(person[n1]);
n1 = "lastName";
console.log(person[n1]);

console.log(person.n1); // undefined. n1이라는 properties는 없다.

// changing properties
person.age = 10;
console.log(person);

// adding properties
person.nationality = "English";
console.log(person);

// deleting properties
delete person.age;
console.log(person);

// Check if a Property Exists. 연산자 in
console.log("firstName" in person);
console.log("age" in person);

// Nested Objects
const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

console.log(myObj.myCars.car2);
console.log(myObj.myCars["car2"]);
console.log(myObj["myCars"]["car2"]);
const p1 = "myCars";
const p2 = "car2";
console.log(myObj[p1][p2]);
