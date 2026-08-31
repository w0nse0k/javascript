/**
 * <h3>JavaScript Continue</h3>
 * @module
 * @see https://www.w3schools.com/js/js_continue.asp
 */
// continue. 반복문 나머지 skip하고 다음 반복
let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // i가 3이면 나머지 코드를 skip하고 다음 반복으로
  text += "The number is " + i + "\n";
}
console.log(text);
