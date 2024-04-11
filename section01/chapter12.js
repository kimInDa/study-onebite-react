// 1. 함수 표현식
// 함수 이름으로는 호출할 수 없고, 변수로 호출한다.
// 호이스팅 되지 않는다.
function funcA() {
    console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
    console.log("funcB");
};

varB();

// 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
};

console.log(varC(10));

let varD = (value) => value + 1;
