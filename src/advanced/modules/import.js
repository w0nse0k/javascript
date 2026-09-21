/**
 * <h3>JavaScript Modules Import</h3>
 * @module
 * @see https://www.w3schools.com/js/js_modules_import.asp
 */
// names imports
import { name, age } from "./export/person.js";
// default imports
import message from "./export/message.js";
// combining Default + Named
import parse, { validate, format } from "./export/parser.js";
// rename named imports
import { add as addition } from "./export/math.js";
// rename default imports (from single default exports)
import text from "./export/message.js";

console.log(name, age);
console.log(message());
parse();
validate();
format();

console.log(addition(1, 2));
console.log(text());
