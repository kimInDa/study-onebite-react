// 함수

// 함수 선언
function greeting() {
    console.log("안녕하세요!");
}

// 함수 호출
greeting();


// 호이스팅
// -> 끌어올리다 : 함수는 선언 전에 사용 가능
let area1 = getArea(10, 20); // 인수
console.log(area1);


function getArea(width, height) {  // 매개변수

  // 중첩함수
  function another() {
    console.log("another");
  }
  another()

    let area = width * height;

    return area;
}

