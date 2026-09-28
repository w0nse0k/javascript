/**
 * <h3>Promise - Then</h3>
 * @module
 */
const putOrder = (order) =>
  new Promise((resolve) => {
    console.log(`order: ${order}`);
    const ordered = `[Order: ${order}]`;
    resolve(ordered);
  });

const makeCoffee = (ordered) =>
  new Promise((resolve) => {
    const coffee = `[Coffee: ${ordered}]`;
    setTimeout(() => resolve(coffee), 1000);
  });

const serveCoffee = (coffee) =>
  new Promise((resovle) => {
    const served = `[Serve: ${coffee}]`;
    setTimeout(() => resovle(served), 1000);
  });

function service(order) {
  putOrder(order)
    .then((ordered) => makeCoffee(ordered))
    .then((coffee) => serveCoffee(coffee))
    .then((served) => console.log(served));
}

service("Americano");
service("Cafe Latte");
service("Single Origin");
