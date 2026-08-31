/**
 * <h3>JavaScript Break</h3>
 * @module
 * @see https://www.w3schools.com/js/js_break.asp
 */
// break. 반복문 종료
let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) break; // i가 3이면 반복문을 종료한다.
  text += "The number is " + i + "\n";
}
console.log(text);
