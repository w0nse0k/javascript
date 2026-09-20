/**
 * <h3>Creating a Promise</h3>
 *
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
