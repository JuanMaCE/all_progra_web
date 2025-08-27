import { useState, useEffect } from 'react';
// guarda el estado de las variables siempre y cuando haya un reolad de dom trick
function Reloj() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setHora(new Date()), 1000);
        return () => clearInterval(id);
    }, []);
    return <h2>{hora.toLocaleTimeString()} por Juan Marcos </h2>
}


export default Reloj;