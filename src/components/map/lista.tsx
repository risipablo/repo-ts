import React, { useState } from "react"

interface Usuarios{
    id:number,
    nombre:string,
    edad:number,
    sexo:string,
    sueldo:number,
    deporte:string
}


export const User: React.FC = () => {
    const [filtroEdad, setFiltroEdad] = useState<number>()
    const [filtroSueldoMin, setFiltroSueldoMin] = useState<number>();
    const [filtroSueldoMax, setFiltroSueldoMax] = useState<number>();
    const [filtroSexo, setFiltroSexo] = useState<string>('')
    const [filtroDeporte, setFiltroDeporte] = useState<string>('')

    const deportistas:Usuarios[] = [
        {id:1, nombre:'Messi', edad:38, sexo:'masculino', sueldo:25000, deporte:'futbol'},
        {id:2, nombre:'Michael', edad:39, sexo:'Masculino', sueldo:18000, deporte:'natacion'},
        {id:3, nombre:'Serena', edad:32, sexo:'femenino', sueldo:32000, deporte:'tenis'},
        {id:4, nombre:'Simone', edad:27, sexo:'Femenino', sueldo:12500, deporte:'gimnasia'},
        {id:5, nombre:'Adam', edad:32, sexo:'Masculino', sueldo:32000, deporte:'natacion'},
        {id:6, nombre:'Roger', edad:42, sexo:'Masculino', sueldo:10000, deporte:'tenis'},
        {id:7, nombre:'Fulana', edad:22, sexo:'Femenino', sueldo:12000, deporte:'futbol'},
    ] 

    const deporteFiltrado = deportistas.filter((persona) => {
        return(filtroEdad ? persona.edad === filtroEdad : true) &&
        (filtroSexo ? persona.sexo.toLowerCase() === filtroSexo : true) &&
        (filtroSueldoMax ? persona.sueldo <= filtroSueldoMax : true) &&
        (filtroSueldoMin ? persona.sueldo >= filtroSueldoMin : true) &&
        (filtroDeporte ? persona.deporte.toLowerCase() === filtroDeporte : true);

    })

    const filtradoSueldo = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value === '0-10000'){
            setFiltroSueldoMin(0)
            setFiltroSueldoMax(10000)
        } else if (value === '10001-20000') {
            setFiltroSueldoMin(10001)
            setFiltroSueldoMax(20000)
        } else if (value === '20001-30000'){
            setFiltroSueldoMin(20001)
            setFiltroSueldoMax(30000)
        } else {
            setFiltroSueldoMin(30001)
            setFiltroSueldoMax(40000)
        } 
    }

    const limpiar = () => {
        setFiltroDeporte('')
        setFiltroEdad(0)
        setFiltroSexo('')
        setFiltroSueldoMax(0)
        setFiltroSueldoMin(0)
    }


    return(
        <div>
            <div className="filtros">

                <label>Filtro por sexo:
                    <select value={filtroSexo} onChange={(e) => setFiltroSexo(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>
                </label>

                <label>Filtro por Edad:
                    <select value={filtroEdad} onChange={(e) => setFiltroEdad(Number(e.target.value))}>
                        <option value="">Todos</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                    </select>
                </label>

                <label>Filtro por deporte:
                    <select value={filtroDeporte} onChange={(e) => setFiltroDeporte(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="natacion">Natacion</option>
                        <option value="futbol">Futbol</option>
                        <option value="gimnasia">Gimnasia</option>
                        <option value="tenis">Tenis</option>
                    </select>
                </label>

                <label>Filtro por sueldo:
                    <select onChange={filtradoSueldo}>
                        <option value="">Todos</option>
                        <option value="0-10000">0 - 10000</option>
                        <option value="10001-20000">10001 - 20000</option>
                        <option value="20001-30000">20001 - 30000</option>
                        <option value="30001-40000">30001 - 40000</option>
                    </select>
                </label>

                <button onClick={limpiar}>limpiar</button>
            </div>
            <table>
            {deporteFiltrado.map((deporte) => (
                <ul key={deporte.id}>
                    <li>{deporte.nombre}</li>
                    <li>{deporte.edad}</li>
                    <li>{deporte.sexo}</li>
                    <li>{deporte.sueldo}</li>
                    <li>{deporte.deporte}</li>
                </ul>
                ))}
            </table>

        </div>
    )
}