/**
 * <h3>MyArray constructor function and methods</h3>
 * @module
 */
function MyArray(array) {
  this.data = array;
}
MyArray.prototype.forEach = function (fn) {
  for (let i = 0; i < this.data.length; i++) {
    fn(this.data[i], i);
  }
};
MyArray.prototype.map = function (fn) {
  const result = [];
  for (const elem of this.data) {
    result.push(fn(elem));
  }
  return result;
};
MyArray.prototype.filter = function (fn) {
  const result = [];
  for (const elem of this.data) {
    if (fn(elem)) result.push(elem);
  }
  return result;
};

const numbers = new MyArray([1, 2, 3, 4, 5]);
numbers.forEach((elem) => console.log(elem * 10));
const numbers2 = numbers.map((elem) => elem * 10);
console.log(numbers2);
const numbers3 = numbers.filter((elem) => elem >= 3);
console.log(numbers3);
