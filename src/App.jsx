import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#000");
  return (
    <div className="w-100 vh-100" style={{ backgroundColor: bgColor }}>
      <button onClick={() => setBgColor("red")} className="btn btn-danger">
        Red
      </button>
      <button onClick={() => setBgColor("blue")} className="btn btn-primary">
        Blue
      </button>
      <button onClick={() => setBgColor("green")} className="btn btn-success">
        Green
      </button>
      <button onClick={() => setBgColor("yellow")} className="btn btn-warning">
        Yellow
      </button>

      <button onClick={() => setBgColor("#000")} className="btn btn-dark">
        Dark
      </button>

      <button
        onClick={() => setBgColor("rgb(255,255,255)")}
        className="btn btn-light border-3 "
      >
        Light
      </button>
    </div>
  );
}

export default App;
