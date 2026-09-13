/**
 * <h3>JavaScript Display Objects</h3>
 * @module
 * @see https://www.w3schools.com/js/js_object_display.asp
 */
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Using a For .. In Loop. properties names 순환
let text = "";
for (let x in person) {
  text += `${x} : '${person[x]}'\n`;
}
console.log(text);

// Object.values()
const myArray = Object.values(person);
console.log(myArray); // ["John", 30, "New York"]

// entry 배열. entry: [name, value]
const myEntries = Object.entries(person);
console.log(myEntries);

// for ...of roop로 entry 순환
for (const entry of myEntries) {
  console.log(entry);
}

text = "";
for (const [name, value] of Object.entries(person)) {
  text += `${name} : '${value}'\n`;
}
console.log(text);

// JSON.stringify()
console.log(JSON.stringify(person));
