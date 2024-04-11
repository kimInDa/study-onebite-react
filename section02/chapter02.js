// 단락 평가(Short-circuit Evaluation)
// -> 첫번째 피연산자의 값만으로도 연산의 결과를 확정지을 수 있다면, 두번째 피연산자에는 접근조차 하지 않음
// -> AND 연산자 : &&
// -> OR 연산자 : ||

function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

// console.log(returnFalse() && returnTrue()); // False 함수, false : 첫번째 False만으로 연산의 값이 False로 확정되므로 returnTrue함수는 접근조차 하지 않음
// console.log(returnTrue() && returnFalse()); // True 함수, False 함수, false : 첫번째 True만으로는 연산의 값을 확정할 수 없으므로 두번째 returnFalse함수까지 접근
// console.log(returnTrue() || returnFalse()); // True 함수, True :  // False 함수, false : 첫번째 True만으로 연산의 값이 True로 확정되므로 returnFalse함수는 접근조차 하지 않음
// console.log(returnFalse() || returnTrue()); // False 함수, True 함수, ture : 첫번째 False만으로는 연산의 값을 확정할 수 없으므로 두번째 returnTrue함수까지 접근

// 단락 평가 활용 사례
// 함수 개선

// 개선 전
function printName(person) {
    if (!person) {
        console.log("person에 값이 없음");
        return;
    }
    console.log(person.name);
}

// 개선 1
function printName2(person) {
    console.log(person && person.name); // undefined
}

// 개선 2
function printName3(person) {
    let name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName3();
printName3({ name: "이정환" });

// T || T => 첫번째 T 반환
// T && T => 두번째 T 반환
// F || F => 두번째 F 반환
// F && F => 첫번째 F 반환
