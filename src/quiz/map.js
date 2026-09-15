/**
 * <h3>array iteration: map</h3>
 * @module
 */
function map(array, fn) {
  const result = [];
  for (const elem of array) result.push(fn(elem));
  return result;
}

const numbers = [1, 2, 3];
const numbers2 = map(numbers, (elem) => elem * 2);
console.log(numbers2);

const cars = ["BMW", "Volvo", "Merdeces"];
const carsList = map(cars, (elem) => `<li>${elem}</li>`);
console.log(`<ul>${carsList.join("")}</ul>`);
