/**
 * <h3>Creating a Promise</h3>
 * Promise는 비동기 작업의 미래 결과를 나타냅니다.
 * 작업이 완료되면 Promise는 값과 함께 이행(fulfilled)되거나 에러와 함께 거부(rejected)됩니다.
 * 프로미스(Promise)는 비동기 코드를 더 깔끔하고 읽기 쉽게 구성할 수 있는 방법을 제공합니다.
 * @module
 * @see https://www.w3schools.com/js/js_async_promises.asp
 */
const promise = new Promise((resolve, reject) => {
  try {
    // asynchronous work
    resolve("Operation completed");
  } catch {
    reject("Operation failed");
  }
});

promise
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
