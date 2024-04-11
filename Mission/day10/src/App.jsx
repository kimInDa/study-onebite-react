import "./App.css";

const Welcome = ({ name, isMember }) => {
    return (
        <h1>
            {isMember ? `${name}님 다시 오셨군요` : `${name}님 가입하시겠어요?`}
        </h1>
    );
};

function App() {
    const welcomeProps = {
        name: "이정환",
        isMember: true,
    };

    return (
        <>
            <Welcome {...welcomeProps} />
        </>
    );
}

export default App;
