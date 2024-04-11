// Common JS 모듈 방식(CJS)
// const { add, sub } = require("./math");

// ES 모듈 방식(ESM)
import mul, { add, sub } from "./math.js"; // 파일 확장자 필수!

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));

// 라이브러리 사용
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
