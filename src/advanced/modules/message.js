/**
 * <h3>message.js module</h3>
 * @module
 * @see https://www.w3schools.com/js/js_modules_export.asp
 */
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + " is " + age + " years old.";
};

// default exports
export default message;
