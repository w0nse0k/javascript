/**
 * <h3>JavaScript String Templates</h3>
 * String Template Literals.
 * ` (backticks)를 사용한다.
 * @module
 * @see https://www.w3schools.com/js/js_string_templates.asp
 */
// multi-line string
let text = `The quick
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
let total = `Total: ${price * (1 + vat)}`;
console.log(total);
