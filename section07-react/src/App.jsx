import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
    // State Lifting(State(상태) 끌어올리기)
    // React.js의 데이터 흐름 = 단방향 데이터 흐름 때문에 발생
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const isMount = useRef(false);

    // useEffect 사용해보기
    // -> setState 비동기로 동작하므로 변경된 state 값으로 작업을 해아할 경우 useEffect 내에서 해야한다.
    useEffect(() => {
        // console.log(`count: ${count} / input: ${input}`);
    }, [count, input]); // 의존성 배열 (dependency array, deps) : 값을 여러개 넣을 수도 있다.

    // useEffect를 통한 컴포넌트 라이프사이클 제어하기
    // 1. 마운트 : 탄생
    // => deps를 빈 배열로 전달 -> 컴포넌트가 마운트 되었을 때, 최초로 딱 한 번 실행.
    useEffect(() => {
        console.log("mount");
    }, []);

    // 2. 업데이트 : 변화, 리렌더링
    // => deps를 생략 -> 마운트 될 때 한 번 실행된 다음에 이후에는 컴포넌트가 리렌더링(업데이트) 될 때마다 계속 실행 됨
    // => 마운트 시점에는 실행되지 않고 업데이트 일 때만 실행하고 싶을 때 : 레퍼런스 객체를 생성한 후 플래그로써 사용(useEffect 강제 종료)
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("update");
    });

    // 3. 언마운트 : 죽음
    // => 컴포넌트가 언마운트 될 때 실행 , useEffect가 끝날 때 마다 실행-> 클린업, 정리함수
    // -> Even 컴포넌트에서 실습

    const onClickButton = (value) => {
        setCount(count + value);
    };

    return (
        <div className='App'>
            <h1>Simple Counter</h1>
            <section>
                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
            </section>
            <section>
                <Viewer count={count} />
                {count % 2 == 0 ? <Even /> : null}
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
