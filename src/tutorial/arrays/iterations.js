/**
 * <h3>JavaScript Array Iterations</h3>
 * for, for...of, for...in, forEach(), map()
 * @module
 * @see https://www.w3schools.com/js/js_array_iteration.asp
 */
const cars = ["BMW", "Volvo", "Mini"];

// for
let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + ",";
}
console.log(text);

// for ... of. elements를 순회한다.
text = "";
for (let x of cars) {
  text += x + ",";
}
console.log(text);

// for ... in. index를 순회한다.
text = "";
for (let x in cars) {
  text += cars[x] + ",";
}
console.log(text);

// forEach()
text = "";
cars.forEach((value) => {
  text += value + ",";
});
console.log(text);

// map()
const newCars = cars.map((value) => `<li>${value}</li>`);
console.log(newCars);
text = `<ul>${newCars.join("")}</ul>`;
console.log(text);
