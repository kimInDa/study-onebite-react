// math 모듈

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}
// Common JS 모듈 방식(CJS)
// module.exports = {
//     add,
//     sub,
// };

// ES 모듈 방식(ESM)
// 방식 1.
// export { add, sub };
// 방식 2.
// 함수 앞에 바로 export 키워드 붙이기
