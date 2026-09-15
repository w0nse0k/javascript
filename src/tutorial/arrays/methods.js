/**
 * <h3>JavaScript Array Methods</h3>
 * @module
 * @see https://www.w3schools.com/js/js_array_methods.asp
 */
// length
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

fruits.length = 2;
console.log(fruits);

// join
fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruitsStr = fruits.join(" * ");
console.log(fruitsStr);

// pop
const lastFruit = fruits.pop();
console.log(lastFruit); // Mango
console.log(fruits); // ["Banana", "Orange", "Apple"]

// push
fruits.push("Kiwi");
console.log(fruits); // ["Banana", "Orange", "Apple", "Kiwi"]

// shift
const firstFruit = fruits.shift();
console.log(firstFruit); // Banana
console.log(fruits); // ["Orange", "Apple", "Kiwi"]

// unshift
fruits.unshift("Lemon");
console.log(fruits); // ["Lemon", "Orange", "Apple", "Kiwi"]

// concat: 현재 배열을 바꾸지 않는다. 새 배열을 리턴한다.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myGirls);
console.log(myChildren);
