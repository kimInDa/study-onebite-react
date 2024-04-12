import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할의 함수
// -> 인자 1. 현재 상태값, 인자 2. 액션 객체 를 전달 받는다.
// -> return 하는 값이 새로운 상태값이 된다.
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

function ExamUseReducer() {
  // useReducer의 인수
  // 1. dispatch : 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  // 2. state의 초깃값
  const [state, dispatch] = useReducer(reducer, 0);

  const onCilckPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지 -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onCilckPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}

export default ExamUseReducer;
