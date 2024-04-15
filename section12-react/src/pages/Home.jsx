import { useSearchParams } from "react-router-dom";

const Home = () => {
  // # 동적 경로 : Query String 꺼내쓰기
  const [params, setParams] = useSearchParams();

  return <div>Home</div>;
};

export default Home;
