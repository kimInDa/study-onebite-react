import { useSearchParams } from "react-router-dom";

function Home() {
  // # 동적 경로 : Query String 꺼내쓰기
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"));

  return <>Home</>;
}

export default Home;
