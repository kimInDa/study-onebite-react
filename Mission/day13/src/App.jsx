import "./App.css";
import { useState } from "react";

const CurrenyInput = ({ currency, value, onChangeInput }) => {
    return (
        <div className='inputWrapper'>
            <label>{currency}:</label>
            <input
                type='number'
                value={value}
                onChange={(e) => onChangeInput(currency, e.target.value)}
            />
        </div>
    );
};

const EXCHANGE_RATE = 1300;

function App() {
    const [input, setInput] = useState({
        krw: 0,
        usd: 0,
    });

    const onChangeInput = (currency, value) => {
        if (currency == "krw") {
            setInput({
                krw: value,
                usd: value * EXCHANGE_RATE,
            });
        } else {
            setInput({
                krw: value / EXCHANGE_RATE,
                usd: value,
            });
        }
    };

    return (
        <section className='App'>
            <h1>환율 변환기 (KRW-USD)</h1>
            <span>현재 환율 : {EXCHANGE_RATE}원</span>
            <CurrenyInput
                currency={"krw"}
                value={input.krw}
                onChangeInput={onChangeInput}
            />
            <CurrenyInput
                currency={"usd"}
                value={input.usd}
                onChangeInput={onChangeInput}
            />
        </section>
    );
}

export default App;
