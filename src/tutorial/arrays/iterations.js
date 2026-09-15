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

// fiter(): 배열에서 특정 조건을 만족하는 원소들만으로 이루어진 배열
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter((elem) => elem > 18);
console.log(over18);

// reduce(): 배열을 한 개의 값으로 줄임
const total = numbers.reduce((acc, elem) => acc + elem, 0);
console.log(total);

const carsList = cars.reduce((acc, elem) => acc + `<li>${elem}</li>`, "");
console.log(`<ul>${carsList}</ul>`);
