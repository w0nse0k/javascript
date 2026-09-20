/**
 * <h3>Compare Promise and await</h3>
 * @module
 * @see https://www.w3schools.com/js/js_async_await.asp
 */
const url = "https://www.w3schools.com/js/fetch.txt";
// 1. then() 사용
fetch(url)
  .then((response) => response.text())
  .then((text) => console.log(text));

// 2. async - await 사용. async 함수 내부만 blocking
async function getData() {
  // await는 async 함수 내부에서만 사용한다.
  const response = await fetch(url); // blocking
  const text = await response.text(); // blocking
  console.log(text);
}
getData();
console.log("continue...");
