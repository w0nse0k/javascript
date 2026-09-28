/**
 * <h3>Async - Await</h3>
 * @module
 */
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function putOrder(order) {
  console.log(`order: ${order}`);
  const ordered = `[Order: ${order}]`;
  return ordered;
}

async function makeCoffee(ordered) {
  await delay(1000);
  const coffee = `[Coffee: ${ordered}]`;
  return coffee;
}

async function serveCoffee(coffee) {
  await delay(1000);
  const served = `[Serve: ${coffee}]`;
  return served;
}

async function service(order) {
  const ordered = await putOrder(order);
  const coffee = await makeCoffee(ordered);
  const served = await serveCoffee(coffee);
  console.log(served);
}

service("Americano");
service("Cafe Latte");
service("Single Origin");
