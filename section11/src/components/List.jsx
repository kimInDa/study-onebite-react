import { useState, useMemo, useContext } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

function List() {
  const [search, setSearch] = useState("");
  const { todos } = useContext(TodoContext);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData(); // 리렌더링 될 때마다 함수 실행

  // # useMemo 훅을 이용한 최적화
  /*
  // * useMemo 사용 전
  const getAnalyzedData = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    
    return { totalCount, doneCount, notDoneCount };
  };
  
  // ! List 컴포넌트가 리렌더링 되거나 검색바에 검색할 때도 해당 함수가 불필요하게 실행됨
  const { totalCount, doneCount, notDoneCount } = getAnalyzedData();
  */

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className='List'>
      <h4>Todo List 🪴</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>doneCount: {doneCount}</div>
        <div>notDoneCount: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder='검색어를 입력하세요'
      />
      <div className='todos_wrapper'>
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
}

export default List;
