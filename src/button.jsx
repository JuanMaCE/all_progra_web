import { useState } from 'react';



function Counter({ texto, changeTaskStatus, oldStatus }) {
    const [showForm, setShowForm] = useState(false);
    const [taskId, setTaskId] = useState("0");
 
    const handleSubmit = (e) => {
        e.preventDefault();
        changeTaskStatus(texto, parseInt(taskId),  parseInt(oldStatus));

        setShowForm(false);
    };

    return (
        <>
            <p>{texto}</p>
            <button onClick={() => setShowForm(true)}>Cambiar prioridad</button>

            {showForm && (
                <div className="overlay">
                    <div className="messagebox">
                        <form onSubmit={handleSubmit}>
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
                                <button type="submit" >Enviar</button>
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

export default Counter;
