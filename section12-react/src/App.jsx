import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

// 구현할 페이지 list => page 컴포넌트 생성
// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
// 4. "/*" : 설정하지 않은 페이지

function App() {
  return (
    // ! Routes 외부의 컴포넌트는 모든 페이지에서 렌더링 된다.(Routes 내부만 페이지 변경시 변경됨)
    // <Home />
    <Routes>
      {/* // ! Routes 내부에는 Route만 가능하다. */}
      {/* <div>Routes 내부에는 Route만 가능</div> */}
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/diary' element={<Diary />} />
      <Route path='/*' element={<Notfound />} />
    </Routes>
  );
}

export default App;
