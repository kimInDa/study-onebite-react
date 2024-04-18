import "./DiaryItem.css";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  const { onDelete } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(id);
    }
  };

  return (
    <div className='DiaryItem'>
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className='info_section'>
        <div className='created_date'>
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className='content'>{content}</div>
      </div>
      <div className='button_section'>
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
        <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
      </div>
    </div>
  );
};

export default DiaryItem;
