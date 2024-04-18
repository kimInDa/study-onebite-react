import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

const Diary = () => {
  //# 동적 경로 : URL Parameter 꺼내쓰기
  const params = useParams();
  const nav = useNavigate();

  return (
    <div>
      <Header
        title={"yyyy-mm-dd 기록"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer />
    </div>
  );
};

export default Diary;
