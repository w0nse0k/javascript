/**
 * <h3>JavaScript Classes Details</h3>
 * @module
 */
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name}이(가) 소리를 냅니다.`);
  }
  static hello() {
    console.log("Hello");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 부모 클래스의 constructor 호출
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name}이(가) 멍멍 짖습니다.`);
  }
}

const animal1 = new Animal("Dog");
const dog1 = new Dog("Dog", "Shephard");

animal1.speak();
dog1.speak();
dog1.bark();
console.log(Animal.prototype.constructor === Animal);
console.log(Dog.prototype.constructor === Dog);
console.log(animal1);
console.log(Dog.prototype);
console.log(dog1);
Dog.hello();
