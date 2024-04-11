// 1. 콜백 함수 (Callback Function)
// -> 자신이 아닌 다른 함수에, 인수로써 전달된 함수
// -> main함수가 원하는 타이밍에 sub 함수를 실행시킬 수 있다.
function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log(3);
}

function sub() {
    console.log("I am sub");
}

main(sub);

main(() => {
    console.log("I am sub2");
});

// 2. 콜백함수의 활용
// -> 구조가 비슷한 함수 중복 작성 개선

// 개선 전
function repeat(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}
function repeatDouble(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx * 2);
    }
}
function repeatTriple(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx * 3);
    }
}

// 개선 후
function repea2(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}
repea2(5, function (idx) {
    console.log(idx);
});
repea2(5, function (idx) {
    console.log(idx * 2);
});
repea2(5, function (idx) {
    console.log(idx * 3);
});
