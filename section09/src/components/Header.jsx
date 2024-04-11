import "./Header.css";

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

export default Header;
