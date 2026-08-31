/**
 * <h3>JS Module Namespace</h3>
 * @module
 * @see https://www.w3schools.com/js/js_modules_namespace.asp
 */
// creates namespace object by importing all
import * as math from "./math_module.js";

console.log(math.PI);
const result1 = math.add(2, 3);
const result2 = math.multiply(2, 3);
console.log(result1, result2);
