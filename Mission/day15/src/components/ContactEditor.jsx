import "./ContactEditor.css";
import { useState, useRef } from "react";

export default function ContactEditor({ onCreate }) {
  const [content, setContent] = useState({ name: "", contact: "" });
  const nameRef = useRef();
  const contactRef = useRef();

  const onChangeContent = (e) => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  const onSubmit = () => {
    // 빈 입력 방지
    if (content.name === "") {
      nameRef.current.focus();
      return;
    } else if (content.contact === "") {
      contactRef.current.focus();
      return;
    }

    onCreate({ ...content });
    setContent({
      name: "",
      contact: "",
    });
  };

  return (
    <div className='ContactEditor'>
      <div className='title'>Add Contact</div>
      <div className='input_wrapper'>
        <input
          ref={nameRef}
          name='name'
          value={content.name}
          onChange={onChangeContent}
          className='name'
          placeholder='이름 ...'
        />
        <input
          ref={contactRef}
          name='contact'
          value={content.contact}
          onChange={onChangeContent}
          className='contact'
          placeholder='연락처(이메일) ...'
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
