/**
 * <h3>JavaScript String Templates</h3>
 * String Template Literals.
 * ` (backticks)를 사용한다.
 * @module
 * @see https://www.w3schools.com/js/js_string_templates.asp
 */
// Quotes Inside Strings
let text = `He's often called "Johnny"`;
console.log(text);

// multi-line string
text = `The quick
brown fox
jumps over
the lazy dog`;

console.log(text);

// interpolation
let firstName = "John";
let lastName = "Doe";
text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);

// interpolation of expressions
let price = 10;
let vat = 0.25;
let total = `Total: ${(price * (1 + vat)).toFixed(2)}`;
console.log(total);
