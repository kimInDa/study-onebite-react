// 비동기 작업 처리하기 1. 콜백 함수
// -> 비동기 함수의 결과를 함수 외부에서 사용하기 위해 콜백 함수를 사용

// 예제 1.
function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b; // 3
        callback(sum);
    }, 3000);
}

add(1, 2, (value) => {
    console.log(value);
});

// 예제2.
// 음식을 주문하는 상황
// -> 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 활용
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});

// -> 인덴츠(들여쓰기)가 점점 깊어짐
// -> 기능이 늘어날수록 가독성이 안좋아짐 -> 콜백 지옥 -> Promise 객체 활용
