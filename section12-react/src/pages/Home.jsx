import { useSearchParams } from "react-router-dom";

const Home = () => {
  // # 동적 경로 : Query String 꺼내쓰기
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"));

  return <div>Home</div>;
};

export default Home;
