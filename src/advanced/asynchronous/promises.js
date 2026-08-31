/**
 * <h3>Asynchronous Promises</h3>
 * @module
 * @see https://www.w3schools.com/js/js_async_promises.asp
 */
fetch("https://www.w3schools.com/js/fetch.txt")
  .then((response) => response.text())
  .then((text) => console.log(text))
  .catch((error) => console.error(error))
  .finally(() => console.log("Finished."));

const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation completed.");
  } else {
    reject("Operation failed.");
  }
});

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.error(error);
  });

const step1 = () => Promise.resolve("A");
const step2 = (value) => Promise.resolve(value + "B");
const step3 = (value) => Promise.resolve(value + "C");

step1()
  .then((value) => step2(value))
  .then((value) => step3(value))
  .then((value) => console.log(value));
