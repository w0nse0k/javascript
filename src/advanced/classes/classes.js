/**
 * <h3>JavaScript Classes</h3>
 * 클래스는 constructor 함수와 prototype에 메서드를 만드는 문법이다.
 * @module
 * @see https://www.w3schools.com/js/js_classes.asp
 */
// object constructor Car() and prototype method age()
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
console.log(myCar);
console.log(Object.getPrototypeOf(myCar));
console.log(myCar.age());
