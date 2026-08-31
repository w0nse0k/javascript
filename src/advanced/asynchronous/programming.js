/**
 * <h3>Asynchronous Programming</h3>
 * @module
 * @see https://www.w3schools.com/js/js_async.asp
 */
function wait() {
  let i = 2e9;
  while (--i > 0);
}

// synchronous (blocking)
wait();
console.log("Done!");
console.log("Another process");

// asynchronous (non-blocking)
setTimeout(() => console.log("2 senconds past. Done."), 2000);
console.log("Next process");
