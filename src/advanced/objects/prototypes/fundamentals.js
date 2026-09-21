/**
 * <h3>Prototype Fundamentals</h3>
 * @module
 */
const human = { species: "Human" };
const jacob = { name: "Jacob" };
const rachel = { name: "Rachel" };

Object.setPrototypeOf(jacob, human); // jacob의 prototype을 human으로
Object.setPrototypeOf(rachel, human); // rachel의 prototype을 human으로

console.log(jacob.species);
jacob.age = "30";
rachel.money = "100";

console.log(jacob);
console.log(rachel);
human.species = "Animal";
console.log(jacob.species);
human.color = "red";
console.log(rachel.color);

// prototype에 methods 설정. 모든 하위 object에서 호출 가능
human.sayHello = function () {
  console.log("Hello", this.name);
};

jacob.sayHello();
rachel.sayHello();
