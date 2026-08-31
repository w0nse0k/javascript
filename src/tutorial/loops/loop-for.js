/**
 * <h3>JavaScript For Loop</h3>
 * JavaScript Loops.
 * for, while, do while loop
 * @module
 * @see https://www.w3schools.com/js/js_loop_for.asp
 */
let text = "";

// for (처음 한번 실행; 조건; 두번째부터 매번 실행) {...}
for (let i = 0; i < 5; i++) {
  // let i는 for loop 안에서만 유효한 local variable이다.
  text += "The number is " + i + "\n";
}
console.log(text);
