/**
 * <h3>JavaScript if</h3>
 * @module
 * @see https://www.w3schools.com/js/js_if.asp
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
