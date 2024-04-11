import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

function List({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");

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

  return (
    <div className='List'>
      <h4>Todo List 🪴</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder='검색어를 입력하세요'
      />
      <div className='todos_wrapper'>
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
