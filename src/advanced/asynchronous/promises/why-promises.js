/**
 * <h3>Why Promises?</h3>
 * @module
 * @see https://www.w3schools.com/js/js_async_promises.asp
 */
// Callback Chains
function step1(fn) {
  const result = "step1 result";
  fn(result);
}

function step2(value, fn) {
  const result = value + ":step2 result";
  fn(result);
}

function step3(value, fn) {
  const result = value + ":step3 result";
  fn(result);
}

step1(function (result1) {
  step2(result1, function (result2) {
    step3(result2, function (result3) {
      console.log(result3);
    });
  });
});
