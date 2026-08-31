/**
 * <h3>Asynchronous Callbacks</h3>
 * @module
 * @see https://www.w3schools.com/js/js_async_callbacks.asp
 */
// Built-in Synchronous Callbacks
const numbers = [1, 2, 3, 4, 5];

// forEach()
let sum = 0;
numbers.forEach((n) => (sum += n));
console.log(sum);

// reduce()
const sum2 = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum2);

// map()
const numbers2 = numbers.map((n) => n * 2);
console.log(numbers2);

// Callback Chains
function fetchResponse(url, callback) {
  setTimeout(() => {
    console.log(`${url}에서 응답을 받음`);
    const result = "HTTP Response";
    callback(result);
  }, 1000);
}

fetchResponse("some url", (result) => {
  console.log(`<response>${result}</response>`);
});

function getJson(response, callback) {
  setTimeout(() => {
    console.log(`${response}에서 json을 구성함`);
    const json = "JSON Data";
    callback(json);
  }, 1000);
}

fetchResponse("some url", (response) => {
  getJson(response, (json) => {
    console.log(`<json>${json}</json>`);
  });
});
