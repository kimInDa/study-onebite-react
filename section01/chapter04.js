// 1. 변수
// 선언 & 초기화
let age;
console.log(age);

// 다시 초기화 가능
age = 30;
console.log(age);

// 2. 상수
// 선언과 동시에 초기화 반드시 필요
const birth = "1997.01.07";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// for, let, const

// 4. 변수 명명 가이드
// 의미있는 이름으로 명명하는 것이 좋다.
let salseCount = 1;
let refundCount = 1;
let totalSalesCount = salseCount - refundCount;
