/**
 * <h3>Prototypes Details</h3>
 * @module
 */
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + "이(가) 소리를 냅니다.");
};

// 2. 자식 생성자 함수
function Dog(name, breed) {
  Animal.call(this, name); // super(name) 역할 (부모 인스턴스 속성 상속)
  this.breed = breed;
}

// 3. 프로토타입 체인 연결 (Dog.prototype -> Animal.prototype)
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // 끊어진 constructor 참조 복구

Dog.prototype.bark = function () {
  console.log(this.breed + "이(가) 멍멍 짖습니다.");
};

const dog = new Dog("Dog", "Shephard");
dog.speak();
dog.bark();

console.log(dog);
