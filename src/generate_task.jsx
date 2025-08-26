import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [showForm, setShowForm] = useState(false); // controla si se muestra el formulario

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Tarea agregada');
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
                <label htmlFor="name">Nombre de la tarea :</label>
                <input type="text" id="name" name="name" required />

                <label for="options">  Elige el estado: </label>
                <select id="options" name="options">
                    <option value="0">Sin empezar</option>
                    <option value="1">En curso</option>
                    <option value="2">listo</option>
                </select>

              <div className="buttons">
                <button type="submit">Enviar</button>
                <button type="button" onClick={() => setShowForm(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Counter;
