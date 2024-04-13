import { useParams } from "react-router-dom";

function Diary() {
  //# 동적 경로 : URL Parameter 꺼내쓰기
  const params = useParams();
  console.log(params); // {id : 100}

  return <>{params.id}번 일기입니다 ~~</>;
}

export default Diary;
