/**
 * <h3>JavaScript Classes</h3>
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

// inheritance
class Model extends Car {
  constructor(brand, year, model) {
    super(brand, year);
    this.model = model;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let yourCar = new Model("Ford", "2014", "Mustang");
console.log(yourCar);
console.log(Object.getPrototypeOf(yourCar));
