/**
 * <h3>JavaScript Dynamic Modules</h3>
 * @module
 * @see https://www.w3schools.com/js/js_modules_dynamic.asp
 */
async function run() {
  // JavaScript Dynamic Import (load JavaScript modules at runtime)
  const module = await import("./export/math.js");
  const result = module.add(2, 3);
  console.log(result);
}
run();
