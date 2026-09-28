/**
 * <h3>Callback Chains<h3>
 * @module
 */
function putOrder(order, fn) {
  console.log(`order: ${order}`);
  const ordered = `[Order: ${order}]`;
  fn(ordered);
}

function makeCoffee(ordered, fn) {
  const coffee = `[Coffee: ${ordered}]`;
  setTimeout(() => fn(coffee), 1000);
}

function serveCoffee(coffee, fn) {
  const served = `[Serve: ${coffee}]`;
  setTimeout(() => fn(served), 1000);
}

function service(order) {
  putOrder(order, (ordered) => {
    makeCoffee(ordered, (coffee) => {
      serveCoffee(coffee, (served) => {
        console.log(served);
      });
    });
  });
}
service("Americano");
service("Cafe Latte");
service("Single Origin");
