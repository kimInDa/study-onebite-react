import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

// @ 이미지 불러오기
import { getEmotionImage } from "./util/get-emotion-image";

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
      {/* // @ 이미지 렌더링하기 from assets 폴더*/}
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
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
