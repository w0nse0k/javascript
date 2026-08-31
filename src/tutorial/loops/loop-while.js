/**
 * <h3>JavaScript While Loops</h3>
 * @module
 * @see https://www.w3schools.com/js/js_loop_while.asp
 */

// while (조건) {...} 조건이 true일 동안 반복
let i = 0;
let text = "";
while (i < 5) {
  text += "The number is " + i + "\n";
  i++;
}
console.log(text);

// do {...} while (조건); 일단 한번 실행하고 조건이 true이면 반복
i = 0;
text = "";
do {
  text += "The number is " + i + "\n";
  i++;
} while (i < 5);
console.log(text);
