/**
 * <h3>Promises Returned by JavaScript APIs</h3>
 * @module
 * @see https://www.w3schools.com/js/js_async_promises.asp
 */
fetch("https://www.w3schools.com/js/fetch.txt")
  .then((response) => response.text())
  .then((text) => console.log(text))
  .catch((error) => console.error(error))
  .finally(() => console.log("Finished."));

console.log("JavaScript continues");
