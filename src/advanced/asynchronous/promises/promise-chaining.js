/**
 * <h3>Promise Chaining</h3>
 * @module
 * @see https://www.w3schools.com/js/js_async_promises.asp
 */
const step1 = () =>
  new Promise((resolve) => {
    const result = "step1 result";
    resolve(result);
  });

const step2 = (value) =>
  new Promise((resolve) => {
    const result = value + ":step2 result";
    resolve(result);
  });

const step3 = (value) =>
  new Promise((resolve) => {
    const result = value + ":step3 result";
    resolve(result);
  });

step1()
  .then((value) => step2(value))
  .then((value) => step3(value))
  .then((value) => console.log(value));
