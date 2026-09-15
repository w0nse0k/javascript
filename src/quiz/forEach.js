/**
 * <h3>array iteration: forEach</h3>
 * @module
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i);
  }
}

const cars = ["BMW", "Volvo", "Merdeces"];

let text = "";
forEach(cars, (elem, i) => (text += `${i}: ${elem}\n`));
console.log(text);

text = "<ul>";
forEach(cars, (elem) => (text += `<li>${elem}</li>`));
text += "</ul>";
console.log(text);
