/**
 * <h3>JavaScript Class Inheritance</h3>
 * 상속은 prototype chain을 연결하는 것이다
 * @module
 * @see https://www.w3schools.com/js/js_class_inheritance.asp
 */
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar);
console.log(myCar.present());
console.log(myCar.show());

// 상속은 prototypes chain을 연결하는 것이다.
console.log(Car.prototype === Object.getPrototypeOf(Model.prototype));
