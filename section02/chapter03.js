// 구조 분해 할당
// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let num1 = arr[0];
let num2 = arr[1];
let num3 = arr[2];

let [one, two, three, four = 4, five] = arr;
console.log(one, two, three, four, five); // 1, 2, 3, 4, undefined

// 2. 객체의 구조 분해 할당
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
};

let { age: myAge, hobby, name, extra = "hello" } = person; // 객체의 구조 분해 할당에서는 age의 이름을 myAge로 바꿀 수도 있다.

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
    console.log(name, age, hobby, extra); // 이정환 27 테니스 undefined
};

func(person);
