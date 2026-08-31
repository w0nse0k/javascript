/**
 * <h3>JavaScript Arrays</h3>
 * data collection을 저장하기 위해 설계된 object type이다.
 * - Elements: 배열의 값들
 * - Ordered: 인덱스에 따른 순서가 있다.
 * - Zero indexed: 인덱스 0부터 시작.
 * - Dynamic size: 크기가 동적으로 변할 수 있다.
 * - Heterogeneous: 서로 다른 type을 저장할 수 있다.
 * @module
 * @see https://www.w3schools.com/js/js_arrays.asp
 */

// Creating
const cars1 = ["Saab", "Volvo", "BMW"];
console.log(cars1);

const cars2 = [];
cars2[0] = "Saab";
cars2[1] = "Volvo";
cars2[2] = "BMW";
console.log(cars2);

// Accessing
console.log(cars1[0]); // Saab
console.log(cars1[1]); // Volvo
console.log(cars1[2]); // BMW

// Changing
cars1[0] = "Opel";
console.log(cars1); // ["Opel", "Volvo", "BMW"]

// Array length
console.log(cars1.length); // 3

// Heterogeneous
const person = ["John", "Doe", 46];
console.log(person);
