/**
 * <h3>JavaScript Object Iterations</h3>
 * @module
 * @see https://www.w3schools.com/js/js_object_iterations.asp
 */
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// entries: object를 array로
const text = Object.entries(person);
console.log(text);
text.forEach((entry) => console.log(entry));

// Object.keys(): key 목록
const keys = Object.keys(person);
console.log(keys);

// Object.values(): value 목록
const values = Object.values(person);
console.log(values);

// for...in loop
for (let x in person) {
  console.log(x, person[x]);
}
