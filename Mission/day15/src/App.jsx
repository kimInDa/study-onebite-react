import "./App.css";
import { useReducer, useRef } from "react";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockData = [
  {
    id: 0,
    name: "이정환",
    contact: "king199777@gmail.com",
  },
  {
    id: 1,
    name: "한입스튜디오",
    contact: "onebiteS@gmail.com",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [contacs, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(mockData.length);

  const onCreate = ({ name, contact }) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className='App'>
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacs={contacs} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
