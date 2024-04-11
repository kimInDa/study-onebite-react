// 스코프(Scope)
// -> "범위", 변수나 함수에 접근하거나 호출할 수 있는 범위를 말 함
// 1. 전역(전체 영역) 스코프 : 전체 영역에서 접근 가능
// 2. 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);

    function funcB() {
        console.log("funcB");
    }
}

funcA();

// console.log(b); // 오류
// funcB(); // 오류

if (true) {
    let c = 1; // 지역 스코프
}
// console.log(c); // 오류

for (let i = 1; i < 10; i++) {
    let d = 1; // 지역 스코프
}
// console.log(d); // 오류

// ⭐️ 함수는 if문이라 for문 안에서는 지역 스코프를 갖지 않는다!
if (true) {
    function funcC() {
        console.log("funcC");
    }
}

funcC();

for (let i = 0; i < 10; i++) {
    function funcD() {
        console.log("funcD");
    }
}

funcD();
