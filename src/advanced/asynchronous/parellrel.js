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
async function loadData() {
  const result = [];
  for (const url of urls) {
    const response = await fetch(url);
    const json = await response.json();
    result.push(json);
  }
  console.log(JSON.stringify(result));
  console.log("loadData() 완료");
}
loadData();

// Promise.all()
async function loadData2() {
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const data = await Promise.all(responses.map((response) => response.json()));
  console.log(JSON.stringify(data));
  console.log("loadData2() 완료");
}
loadData2();
