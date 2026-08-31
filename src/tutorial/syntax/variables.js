/**
 * <h3>JavaScript Variables</h3>
 * let 은 reassignment(재할당) 가능, const 는 reassignment 불가.
 * redeclaration(재선언) 은 let, const 모두 불가.
 * variable 이름을 identifier라고 한다.
 *   - 문자, 숫자, _, $ 사용 가능
 *   - 숫자로 시작할 수 없다.
 *   - case sensitive (대소문자 구분)
 *   - lowerCamelCase 를 사용한다. (Convention) 예) firstName, masterCard 변하지 않는다면 항상 const 를 사용하라!!
 * @module
 * @see https://www.w3schools.com/js/js_variables.asp
 */

// let 은 reassignment 가능, const 는 reassignment 불가.
let x = 5;
x = 10; // reassignment 가능

const y = 5;
// y = 10; // reassignment 불가 (error)

// redeclaration 은 let, const 모두 불가. (error)
// let a = 5; // error
// const y = 10; // error

const carName = "Volvo"; // case sensitive, lowerCamelCase
