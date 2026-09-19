/**
 * <h3>JavaScript Static Methods</h3>
 * static methods는 constructor 함수의 properties 이다.
 * @module
 * @see https://www.w3schools.com/js/js_class_static.asp
 */
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");
console.log(myCar);
console.log(Car.hello());
