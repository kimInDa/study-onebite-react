import "./Editor.css";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";

const getStringedDate = (targetDate) => {
  // new Date() -> YYYY-MM-DD 로 변환 : date 타입의 input은 vlaue로 들어오는 값의 형식으로 "YYYY-MM-DD"만 인식하기 떄문에
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 한자리 수의 월과 일의 앞자리에 0 붙여주기
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const nav = useNavigate();

  const onChangeInput = (e) => {
    // createdDate의 값은 new Date()이 아니라 YYYY-MM-DD 으로 들어오므로 다시 new Date()로 변경
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input
          name='createdDate'
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type='date'
        />
      </section>
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((item) => (
            <EmotionItem
              // EmontionItem은 input 태그가 아닌 컴포넌트이기 때문에 event 겍체가 전달되지 않으므로 우리가 객체를 만들어주어야 함
              onClick={() =>
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <textarea
          name='content'
          value={input.content}
          onChange={onChangeInput}
          placeholder='오늘은 어땠나요?'
        />
      </section>
      <section className='button_section'>
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
