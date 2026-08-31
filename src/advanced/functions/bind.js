/**
 * <h3>JavaScript Function bind()</h3>
 * call()과 apply()는 새 함수를 만드는 것이 아니라 즉시 호출한다.
 * bind()는 새 함수만 만들고 호출하지 않는다. 나중에 필요할 때 호출.
 * @module
 * @see https://www.w3schools.com/js/js_function_bind.asp
 */
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

// Create member Object
const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

person.display();

// member object에 fullName method를 binding한 함수를 만들어서 리턴.
// bind() 할때는 호출하지 않고 새 함수만 만들어서 변수에 넣고,
const display = person.display.bind(member);

// 나중에 호출
display();

// 함수가 callback으로 사용될 때, this를 잃는다.
setTimeout(person.display, 1000);

setTimeout(display, 1000);
