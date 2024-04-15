import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

// @ 이미지 불러오기
import emotion1 from "./assets/emotion1.png";
import emotion2 from "./assets/emotion2.png";
import emotion3 from "./assets/emotion3.png";
import emotion4 from "./assets/emotion4.png";
import emotion5 from "./assets/emotion5.png";

// 구현할 페이지 list => page 컴포넌트 생성
// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
// 4. "/edit" : 일기를 수정하는 Edit 페이지 (Mission!)
// 0. "/*" : 설정하지 않은 페이지

function App() {
  // # useNavigate 훅을 이용한 페이지 이동
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      {/* // @ 이미지 렌더링하기 from public 폴더*/}
      <div>
        <img src='/emotion1.png' />
        <img src='/emotion2.png' />
        <img src='/emotion3.png' />
        <img src='/emotion4.png' />
        <img src='/emotion5.png' />
      </div>
      {/* // @ 이미지 렌더링하기 from assets 폴더*/}
      <div>
        <img src={emotion1} />
        <img src={emotion2} />
        <img src={emotion3} />
        <img src={emotion4} />
        <img src={emotion5} />
      </div>

      {/* // ! Routes 외부의 컴포넌트는 모든 페이지에서 렌더링 된다.(Routes 내부만 페이지 변경시 변경됨) */}
      {/* // <Home /> */}

      {/* // # Link 컴포넌트를 이용한 페이지 이동 */}
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>

      {/* // # 페이지 이동 함수 호출 */}
      <button onClick={onClickButton}>New 페이지로 이동</button>

      <Routes>
        {/* // ! Routes 내부에는 Route만 가능하다. */}
        {/* <div>Routes 내부에는 Route만 가능</div> */}
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        {/* //# 동적 경로 : URL Parameter 설정하기 */}
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
