/**
 * <h3>JavaScript Function call()</h3>
 * 어떤 object의 함수를 호출할때 this를 그 object가 아닌 다른 object로 바인딩. 다른 object의 methods를 빌려서 호출하는 효과
 * @module
 * @see https://www.w3schools.com/js/js_function_call.asp
 */
const person = {
  firstName: "Ana",
  lastName: "Armas",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  fullNameWithCity: function (city) {
    return `${this.firstName} ${this.lastName} in ${city}`;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};

// This will return "John Doe":
console.log(person.fullName());
console.log(person.fullName.call(person1));

// The call() Method with Arguments
console.log(person.fullNameWithCity("Seoul"));
console.log(person.fullNameWithCity.call(person1, "Seoul"));
