import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const deneme = import.meta.env.VITE_PRIVATE_KEY;
  const deneme2 = import.meta.env.PRIVATE_KEY;
  const all = import.meta.env;
  console.log("all", all);
  console.log("deneme2", deneme2);
  // console.log("import.meta.env.PRIVATE_KEY", import.meta.env.PRIVATE_KEY);
  // const denem2 = process.env.PRIVATE_KEY;
  console.log("deneme", deneme);
  // console.log("denem2", denem2);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
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
    </>
  );
}

export default App;
