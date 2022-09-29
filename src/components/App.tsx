import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App mt-4 flex flex-col items-center gap-8">
            <div className="flex flex-row items-center justify-center gap-4 border-4 border-blue-500 p-4">
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1 className="font-bold">Vite + React</h1>
            <div className="card flex flex-col items-center">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default App;
