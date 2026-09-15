/**
 * <h3>object copy</h3>
 * @module
 */
function copy(obj) {
  const copied = {};
  for (const [name, value] of Object.entries(obj)) copied[name] = value;
  return copied;
}

const person1 = { name: "John", age: 90 };
const person2 = copy(person1);
console.log(person2);

const car1 = { model: "5 Series", power: 340, torgue: 46 };
const car2 = copy(car1);
console.log(car2);

console.log(person1 === person2);
console.log(car1 === car2);
