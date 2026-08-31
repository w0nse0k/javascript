/**
 * <h3>Prototype Fundamentals</h3>
 * @module
 */
const human = { species: "Human" };
const jacob = { name: "Jacob" };
const rachel = { name: "Rachel" };

Object.setPrototypeOf(jacob, human); // jacob.prototype = human
Object.setPrototypeOf(rachel, human); // rachel.prototype = human

console.log(jacob.species);
jacob.age = "30";
rachel.money = "100";

console.log(jacob);
console.log(rachel);
human.species = "Animal";
console.log(jacob.species);
human.color = "red";
console.log(rachel.color);
