// Truthy와 Falsy
// 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징

// 1. Falsy한 값(7)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // Big integer

if (!f1) {
    console.log("falsy");
}

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 활용 사례
function printName(person) {
    // 조건문의 조건식 개선 <= (person === undefined || person === null)
    if (!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = { name: "이정환" };
printName(person);
