/**
 * <h3>JavaScript this Keyword</h3>
 * this는 런타임에 메서드를 호출하는 객체에 bind 된다.
 * @module
 * @see https://www.w3schools.com/js/js_object_this.asp
 */
const person1 = {
  name: "John",
  hello: function () {
    return "Hello " + this.name;
  },
};

const person2 = {
  name: "Anna",
  hello: person1.hello,
};

console.log(person1.hello());
console.log(person2.hello());
