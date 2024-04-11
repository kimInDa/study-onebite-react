import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
    // State Lifting(State(상태) 끌어올리기)
    // React.js의 데이터 흐름 = 단방향 데이터 흐름 때문에 발생
    const [count, setCount] = useState(0);

    const onClickButton = (value) => {
        setCount(count + value);
    };

    return (
        <div className='App'>
            <h1>Simple Counter</h1>
            <section>
                <Viewer count={count} />
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
