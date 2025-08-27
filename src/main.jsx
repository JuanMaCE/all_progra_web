import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Reloj from "./Clock";
import Generate_task from "./generate_task";
import Counter from "./button";
import "./index.css";

function App() {
  const [list_por_hacer, setTasks_hacer] = useState([]);
  const [list_por_progreso, setTasks_progreso] = useState([]);
  const [list_por_hecho, setTasks_hecho] = useState([]);

  const addTask = (newTask, status) => {
    if (status === 0) {
      setTasks_hacer([...list_por_hacer, newTask]);
    }
    else if (status === 1) {
      setTasks_progreso([...list_por_progreso, newTask]);
    } else if (status === 2) {
      setTasks_hecho([...list_por_hecho, newTask]);
    }
  };

  const changeTaskStatus = (task, newStatus, oldStatus) => {
    if (oldStatus === 0) setTasks_hacer(list_por_hacer.filter(t => t !== task));
    else if (oldStatus === 1) setTasks_progreso(list_por_progreso.filter(t => t !== task));
    else if (oldStatus === 2) setTasks_hecho(list_por_hecho.filter(t => t !== task));

    if (newStatus === 0) setTasks_hacer([...list_por_hacer, task]);
    else if (newStatus === 1) setTasks_progreso([...list_por_progreso, task]);
    else if (newStatus === 2) setTasks_hecho([...list_por_hecho, task]);
  };

  


  return (
    <>
      <Reloj />
      <Generate_task onAddTask={addTask} /> {}
      <div className="kanban">

        <div id="porHacer" className="column">
          <h3>Por hacer</h3>
          {list_por_hacer.map((task, index) => (
              <Counter texto={task}   changeTaskStatus={changeTaskStatus} oldStatus={0} />
          ))}
        </div>

        <div id="enProgreso" className="column">
          <h3>En progreso</h3>
            {list_por_progreso.map((task, index) => (
              <Counter texto={task}   changeTaskStatus={changeTaskStatus} oldStatus={1} />
            ))}
        </div>  

        <div id="hecho" className="column">
          <h3>Hecho</h3>
            {list_por_hecho.map((task, index) => (
              <Counter texto={task}   changeTaskStatus={changeTaskStatus} oldStatus={2} />
          ))}
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
