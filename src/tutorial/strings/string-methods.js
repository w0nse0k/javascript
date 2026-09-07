/**
 * <h3>JavaScript String Methods</h3>
 * 문자열은 primitive type이며, immutable하다. 즉, 문자열을 변경할 수 없다.
 * @module
 * @see https://www.w3schools.com/js/js_string_methods.asp
 */
// at(index) : 문자열에서 특정 인덱스에 있는 문자를 반환한다.
let text = "HELLO WORLD";
console.log(text.at(0));
console.log(text.at(-1));
console.log(text.at(11));

// concat(...)
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

// slice(from, end)
text = "Apple, Banana, Kiwi";
console.log(text.slice(7, 13));
console.log(text.slice(7));
console.log(text.slice(-12));

// toUpperCase(), toLowerCase()
text1 = "Hello World!";
console.log(text1.toUpperCase());
console.log(text1.toLowerCase());

// trim(), trimStart(), trimEnd()
text1 = "      Hello World!      ";
console.log(text1.trim());
console.log(text1.trimStart());
console.log(text1.trimEnd());

// padStart(length, string), padEnd(length, string)
text = "5";
console.log(text.padStart(4, "0"));
console.log(text.padEnd(4, "0"));

// repeat(count)
text = "Hello world!";
console.log(text.repeat(2));

// replace(old, new)
text = "Please visit Microsoft and Microsoft!";
console.log(text.replaceAll("Microsoft", "W3Schools"));

// split(delimiter)
text = "Apple,Banana,Kiwi";
const myArr = text.split(",");
console.log(myArr);
