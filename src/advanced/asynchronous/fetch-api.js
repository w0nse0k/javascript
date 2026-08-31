/**
 * <h3>Asynchronous Fetch API</h3>
 * @module
 * @see https://www.w3schools.com/js/js_async_fetch.asp
 */
const fileUrl = "https://www.w3schools.com/js/fetch.txt";
async function loadText(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(response.status + " " + response.statusText);
    }
    const text = await response.text();
    console.log(text);
  } catch (err) {
    console.error(err.message);
  }
}

loadText(fileUrl);
console.log("continue...");

const customerUrl = "https://www.w3schools.com/js/customer.json";
async function loadCustomer() {
  const response = await fetch(customerUrl);
  const customer = await response.json();
  console.log(customer);
}

// Call the async function
loadCustomer();

// Async function to download files
async function loadData() {
  const [customerResponse, productsResponse, newsResponse] = await Promise.all([
    fetch("https://www.w3schools.com/js/customer.json"),
    fetch("https://www.w3schools.com/js/products.json"),
    fetch("https://www.w3schools.com/js/news.json"),
  ]);
  const [customer, products, news] = await Promise.all([
    await customerResponse.json(),
    await productsResponse.json(),
    await newsResponse.json(),
  ]);

  console.log("Custome name: " + customer.name);
  console.log(products.length + " products");
  console.log(news.length + " news items");
}

loadData();
