import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./Cpunter";
import Reloj from "./Clock";
import Generate_task from "./generate_task";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Reloj />
    <Generate_task onCountChange />
    <>
      <h2>Kanban con Flexbox</h2>
      <div className="kanban">
        <div className="column">
          <h3>Por hacer</h3>
          <div className="task">Tarea 1</div>
          <div className="task">Tarea 2</div>
        </div>
        <div className="column">
          <h3>En progreso</h3>
          <div className="task">Tarea 3</div>
        </div>
        <div className="column">
          <h3>Hecho</h3>
          <div className="task">Tarea 4</div>
        </div>
      </div>
    </>
  </React.StrictMode>
);
