/**
 * <h3>JavaScript async and await</h3>
 * "async와 await는 Promise를 더 쉽게 다룰 수 있게 해줍니다" 
async와 await 키워드는 Promise 기반의 코드를 더 읽기 쉽게 만들어 줍니다. 
이 키워드들을 사용하면 비동기 코드를 마치 일반적인 동기 코드처럼 작성할 수 있습니다.
내부적으로는 여전히 Promise가 사용됩니다.

함수 앞에 `async` 키워드를 붙이면 해당 함수는 Promise를 반환하게 됩니다.
함수가 값을 반환하면, JavaScript는 자동으로 그 값을 Promise로 감쌉니다.

`await` 키워드는 Promise가 처리(settle)될 때까지 기다립니다.
이 키워드는 `async` 함수 내부나 JavaScript 모듈의 최상위 수준에서만 사용할 수 있습니다.
`async` 함수가 대기하는 동안에도 프로그램의 나머지 부분은 계속 실행될 수 있습니다.
 * @module
 * @see https://www.w3schools.com/js/js_async_await.asp
 */
// promise
const hello = () =>
  new Promise((resolve) => {
    const message = "Hello World";
    resolve(message);
  });

// then()
hello().then((value) => console.log(value));

// async fuction은 promise를 return 한다. hello와 동일한 함수
async function hello2() {
  return "Hello World";
}
hello2().then((value) => console.log(value));

// await
async function sayHello() {
  const result = await hello2(); // await는 async 함수 내부에서만 사용
  console.log(result);
}
sayHello();
