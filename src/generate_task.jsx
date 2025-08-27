import { useState } from 'react';

function Generate_task({ onAddTask }) {
  const [showForm, setShowForm] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskId, setTaskId] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTask(taskName, parseInt(taskId));

    setTaskName("");
    setTaskId("0");
    setShowForm(false);
  };

  return (
    <>
      <button onClick={() => setShowForm(true)}>Agregar Task</button>

      {showForm && (
        <div className="overlay">
          <div className="messagebox">
            <h2>Agrega tu tarea</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nombre de la tarea:</label>
              <input
                type="text"
                id="name"
                required
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />

              <label htmlFor="options">Elige el estado:</label>
              <select
                id="options"
                value={taskId}
                onChange={(e) => setTaskId(e.target.value)}
              >
                <option value="0">Sin empezar</option>
                <option value="1">En curso</option>
                <option value="2">Listo</option>
              </select>

              <div className="buttons">
                <button type="submit">Enviar</button>
                <button type="button" onClick={() => setShowForm(false)}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Generate_task;