import { useState } from 'react';
// guarda el estado de las variables siempre y cuando haya un reolad de dom trick

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>Has hecho click {count} veces</p>
            <button onClick={() => {
                setCount(count + 1);
                console.log(count); 
            }}>
                +1 al contador
            </button>
        </>
    );
}

export default Counter;
