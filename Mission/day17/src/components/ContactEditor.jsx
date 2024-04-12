import "./ContactEditor.css";
import { contactDispatchedContext } from "../App";
import { useState, useContext } from "react";

/* ✅ 5. Context로 공급받을 것이므로 매개변수에서 기존 Props 제거 */
export default function ContactEditor() {
  /* 사용자로부터 입력받은 이름과 연락처를 저장할 State */
  const [state, setState] = useState({
    name: "",
    contact: "",
  });

  /* ✅ 6. ContactDispatchContext로 부터 onCreateContact 공급받기*/
  const { onCreateContact } = useContext(contactDispatchedContext);

  /* 입력된 값을 State에 보관하는 이벤트 핸들러 */
  const onChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  /* "Add" 버튼이 클릭되었을 때 동작할 함수 - 새로운 Contact 아이템 추가 */
  const onSubmit = () => {
    /* 이름이나 연락처가 입력되지 않았을 때 경고창 발생 */
    if (state.name === "" || state.contact === "") {
      alert("이름과 연락처를 입력해주세요");
      return;
    }
    /* App 컴포넌트로부터 Props로 받은 onCreateContact 호출 */
    onCreateContact(state.name, state.contact);

    /* 아이템이 추가된 이후 State 값 초기화 */
    setState({
      name: "",
      contact: "",
    });
  };

  return (
    <div className='ContactEditor'>
      <div className='title'>Add Contact</div>
      <div className='input_wrapper'>
        {/* 객체 형태의 State를 사용함에 유의 */}
        <input
          name='name'
          value={state.name}
          onChange={onChangeState}
          className='name'
          placeholder='이름 ...'
        />
        {/* 객체 형태의 State를 사용함에 유의 */}
        <input
          name='contact'
          value={state.contact}
          onChange={onChangeState}
          className='contact'
          placeholder='연락처(이메일) ...'
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
