import { useState } from "react";
import reactLogo from './assets/react.svg';
import './App.css';
import HideSecret from "./components/HideSecret";
import RevealSecret from "./components/RevealSecret";

function App() {
  const [key, setKey] = useState<string>("");
  const [result, setResult] = useState<string>("");

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Proyect created  by  Juan</h1>
      <p>you can save your secrets here or maybe not...</p>

      <div className="card">
        <HideSecret setKey={setKey} setResult={setResult} />
        <RevealSecret keyValue={key} setKeyValue={setKey} setResult={setResult} />

        {result && <p style={{ marginTop: "1rem", fontWeight: "bold" }}>your secret are: {result}</p>}
      </div>
    </>
  );
}

export default App;
