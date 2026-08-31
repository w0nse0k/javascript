/**
 * <h3>Promise of setTime()</h3>
 * @module
 */

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

delay(1000).then(() => console.log("Hello"));
console.log("continue...");

await delay(2000);
console.log("Jacob");
