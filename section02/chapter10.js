// Date 객체와 날짜

// 1. Date 객체를 생성하는 방법
// 1.1. 현재 날짜로 생성
let date1 = new Date(); // 생성자 // Sat Mar 30 2024 16:45:53 GMT+0900 (한국 표준시)
// 1.2. 특정 날짜로 생성
let date2_1 = new Date("1997/01/07/10:10:59"); // Tue Jan 07 1997 10:10:59 GMT+0900 (한국 표준시)
let date2_2 = new Date(1997, 1, 7, 23, 59, 59); // Fri Feb 07 1997 23:59:59 GMT+0900 (한국 표준시)

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC)로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime(); // 1711785053024
let date4 = new Date(ts1); // Sat Mar 30 2024 16:51:06 GMT+0900 (한국 표준시)

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 2024
let month = date1.getMonth() + 1; // 자바스크립트의 1월 = 0 이므로 1을 더해서 쓴다.
let date = date1.getDate(); // 20

let hour = date1.getHours(); // 16 (24시간제)
let minute = date1.getMinutes(); // 53
let seconds = date1.getSeconds(); // 29

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 자바스크립트의 1월 = 0 이므로 3월로 수정하는 것
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 시간 제외 출력 : Thu Mar 30 2023
console.log(date1.toLocaleString()); // 현지화 된 포맷으로 출력 : 2023. 3. 30. 오후 11:59:59
