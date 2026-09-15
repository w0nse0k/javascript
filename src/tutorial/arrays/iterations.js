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
console.log(text); // BMW,Volvo,Mini,

// for ... of. elements를 순회한다.
text = "";
for (let x of cars) {
  text += x + ",";
}
console.log(text); // BMW,Volvo,Mini,

// forEach()
text = "";
cars.forEach((value) => (text += value + ","));
console.log(text); // BMW,Volvo,Mini,

// map()
const newCars = cars.map((value) => `<li>${value}</li>`);
console.log(newCars); // ["<li>BMW</li>", "<li>Volvo</li>", "<li>Mini</li>"]
text = `<ul>${newCars.join("")}</ul>`;
console.log(text);

// fiter()

// reduce()
