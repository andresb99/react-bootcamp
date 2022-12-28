import react, { useState } from "react"

const Componente = () => {

    const [contador, setContador] = useState(0)

    const add = () => {
        setContador(contador+1)
    }

    const remove = () => {
        setContador(contador-1)
    }

    return (<>
        <button onClick={remove}>-</button>
        <span>{contador}</span>
        <button onClick={add}>+</button>
    </>);
}

export default Componente;