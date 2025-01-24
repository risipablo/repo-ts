import { useEffect, useState } from "react"

export const Contador: React.FC = () => {
    const [contador,setContador] = useState<number>(0)
    const [color,setColor] =useState<string>('')

    useEffect(() => {

    },[contador,color])

    function cambiarColor(){
        setColor(color => color ? '' : 'red')
    }

    const incrementar = () => {
        setContador(contador + 1)
    }

    const descremento = () => {
        setContador(contador - 1)
    }

    const multiplicador = () => {
        setContador(contador * 2)
    }

    const divisor = () => {
        setContador(contador / 2)
    }

    const limpiar = () => {
        setContador(0)
    }

    const redondearArriba = () => {
        setContador(Math.ceil(contador))
    }

    const redondearAbajo = () => {
        setContador(Math.floor(contador))
    }


    return (
        <div>
            <h2>Contador</h2>
            <p onClick={cambiarColor} style={{ color: color }}> Contador {contador} </p>
            <div className="botones">
            <button onClick={incrementar}>+</button>
            <button onClick={descremento}>-</button>
            <button onClick={multiplicador}>*</button>
            <button onClick={divisor}>/</button>
            <button onClick={redondearArriba}>redondear arriba</button>
            <button onClick={redondearAbajo}> redondear abajo</button>
            </div>
            <button onClick={limpiar}>limpiar</button>
        </div>
    )
} 