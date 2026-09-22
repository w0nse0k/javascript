/**
 * <h3>Animal, Human classes</h3>
 * @module
 */
class Animal {
  constructor(species) {
    this.species = species;
  }
}
class Human extends Animal {
  constructor(name, species = "Human") {
    super(species);
    this.name = name;
  }
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

const jacob = new Human("Jacob");
const rachel = new Human("Rachel");
console.log(jacob);
console.log(rachel);
jacob.sayHello();
rachel.sayHello();
