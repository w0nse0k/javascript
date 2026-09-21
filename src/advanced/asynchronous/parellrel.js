/**
 * <h3>Running Async Tasks in Parallel</h3>
 * @module
 * @see https://www.w3schools.com/js/js_async_parallel.asp
 */
const urls = [
  "https://www.w3schools.com/js/customer.json",
  "https://www.w3schools.com/js/products.json",
  "https://www.w3schools.com/js/news.json",
];

// Sequential Operations
async function loadDataSequential() {
  console.time("loadDataSequential()");
  const results = [];
  for (const url of urls) {
    const response = await fetch(url);
    const json = await response.json();
    results.push(json);
  }
  console.log("loadDataSequential()", JSON.stringify(results));
  console.timeEnd("loadDataSequential()");
}
loadDataSequential();

// Promise.all()
async function loadDataParellel() {
  console.time("loadDataParellel()");
  const data = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    }),
  );
  console.log("loadDataParellel()", JSON.stringify(data));
  console.timeEnd("loadDataParellel()");
}
loadDataParellel();
