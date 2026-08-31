/**
 * <h3>JavaScript Modules Import</h3>
 * @module
 * @see https://www.w3schools.com/js/js_modules_import.asp
 */
// names imports
import { name, age } from "./person.js";
// default imports
import message from "./message.js";
// combining Default + Named
import parse, { validate, format } from "./parser.js";
// rename named imports
import { add as addition } from "./math_module.js";
// rename default imports (from single default exports)
import text from "./message.js";

console.log(name, age);
console.log(message());
parse();
validate();
format();

console.log(addition(1, 2));
console.log(text());
