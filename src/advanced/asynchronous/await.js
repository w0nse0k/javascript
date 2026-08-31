/**
 * <h3>JavaScript async and await</h3>
 * @module
 * @see https://www.w3schools.com/js/js_async_await.asp
 */
// Create an async function
async function hello() {
  return "Hello World!";
}

// Call the async function
hello().then(function (value) {
  console.log(value);
});

// async 함수 내부만 기다린다.
async function getData() {
  const response = await fetch("https://www.w3schools.com/js/fetch.txt");
  const text = await response.text();
  console.log(text);
}

getData();
console.log("continue...");
