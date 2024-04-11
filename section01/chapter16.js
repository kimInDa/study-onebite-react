// 객체 심화
// 1. 상수 객체
// 상수(const)에 저장해둔 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
    name: "이정환",
    // 메서드
    // -> 객체의 동작을 정의한다
    sayHello: function () {
        console.log("Hello");
    },
    // 메서드(화살표 함수)
    sayBye: () => {
        console.log("Bye!");
    },
    // 메서드 선언
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();
