/**
 * <h3>JavaScript if else</h3>
 * @module
 * @see https://www.w3schools.com/js/js_if_else.asp
 */
const time = new Date().getHours();
console.log(time);

let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);
