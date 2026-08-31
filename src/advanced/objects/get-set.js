/**
 * <h3>JavaScript Object Accessors</h3>
 * @module
 * @see https://www.w3schools.com/js/js_object_accessors.asp
 */
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
};

console.log(person.fullName);

person.lang = "en";
console.log(person.language);
