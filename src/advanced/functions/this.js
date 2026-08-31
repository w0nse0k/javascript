/**
 * <h3>The JavaScript this Keyword</h3>
 * object methods에는 arrow function을 쓰지 말라. this가 바인딩 안된다.
 * @module
 * @see https://www.w3schools.com/js/js_function_this.asp
 */
const person = {
  firstName: "John",
  sayHello: function () {
    return this.firstName;
  },
  sayGoodbye: () => {
    return this;
  },
};

console.log(person.sayHello());
console.log(person.sayGoodbye());
