import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

function TodoItem({ id, isDone, content, date }) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className='TodoItem'>
      <input onChange={onChangeCheckbox} checked={isDone} type='checkbox' />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

/*
// React.memo 를 커스텀하여 체크되는 todo만 리렌더링 되도록 최적화
// 고차 컴포넌트 (HOC; Higher Order Component)
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
  // T -> Props 바뀌지 않음 -> 리렌더링 X
  // F -> Props 바뀜 -> 리렌더링 O

  // id, isDone, content, date가 변경될 경우에만 리렌더링
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  // id, isDone, content, date가 변경되지 않는 경우에는 리렌더링 X
  return true;
});
*/

export default memo(TodoItem);
