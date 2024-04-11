// 비동기 작업 처리하기 3. Async & Await

// 1. async ?
// -> 어떤 함수를 비동기 함수로 만들어주는 키워드
// -> 함수가 프로미스를 반환하도록 변환해주는 그런 키워드
// -> 프로미스를 반환하지 않는 함수에 붙여서 자동으로 해당 함수를 비동기로 작동하고 프로미스를 반환하도록 변환하는 기능

async function exampleFuc() {
    return {
        name: "이정환",
        id: "winterlood",
    };
}

console.log(exampleFuc()); // 프로미스 객체

// 함수가 이미 Promise를 반환하고 있다면 async는 아무 기능도 하지 않는다.
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이정환",
                id: "winterlood",
            });
        }, 1500);
    });
}

// 2. await
// -> async 함수 내부에서만 사용이 가능 한 키워드
// -> 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    const data = await getData();
    console.log(data);
}

printData();
