import "./App.css";

const App = () => {
    return (
        <div className="content">
            <div className="title">
                <h1>Super Calculator</h1>
            </div>
            <div className="calculator">
                <div className="case">
                    <div className="display">
                        <h2>Resultado.</h2>
                    </div>
                    <div className="buttons">
                        <button>C</button>
                        <button>()</button>
                        <button>%</button>
                        <button>/</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>X</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>-</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>-</button>
                        <button>+/-</button>
                        <button>0</button>
                        <button>,</button>
                        <button>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
