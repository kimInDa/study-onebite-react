import "./Header.css";
import { memo } from "react";

function Header() {
  const createDate = () => {
    const weekArr = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const week = weekArr[date.getDay()];

    return `${year}년 ${month}월 ${day}일 ${week}`;
  };
  return (
    <div className='Header'>
      <h3>오늘은 🗓️</h3>
      {/* <h1>{new Date().toDateString()}</h1> */}
      <h1>{createDate()}</h1>
    </div>
  );
}

// React.memo로 컴포넌트 리렌더링 죄적화
// 투두 리스트에 변경이 발생되더라도 Header 컴포넌트는 리렌더링 될 필요 없음

// const memoizedHeader = memo(Header);
// export default memoizedHeader;

export default memo(Header);
