// 비동기 작업 처리하기 2. Promise

// 1. Promise?
// -> 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// -> 비동기 작업을 감싸는 객체이다.
// -> 효능 : 비동기 작업의 실행, 상태관리, 결과 저장, 병렬 실행, 다시 실행 등...

// 2. Promise의 3가지 상태
// (1) 대기 Pending : 아무 작업이 완료되지 않은 상태
// (2) 성공 Fulfilled : 비동기 작업이 성공적으로 마무리 된 상태  = resolve(해결) 되었다.
// (3) 실패 Rejected : 비동기 작업이 실패한 상태 = reject(거부) 되었다.

function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수 = executor 함수
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10); // resolve 함수 = Promise의 상태를 성공으로 바꿔주는 함수
            } else {
                reject("num이 숫자가 아닙니다"); // reject 함수 = Promise의 상태를 실패로 바꿔주는 함수
            }
        }, 2000);
    });

    return promise;
}

// then 메서드, catch 메서드
// -> Promise의 결과값 이용 : then은 성공의 결과값, catch는 실패의 결과값
// -> Promise Chaning : then과 catch를 연달아서 사용하는 문법
add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(undefined);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
