import React from "react";
import { Empleado } from "./empleados";
import { Manager } from "./manager";


const empleados = [
    new Empleado("Juan", 30000),
    new Empleado("Ana", 35000),
    new Manager("Carlos", 50000, "Ventas"),
    new Manager("Laura", 55000, "Marketing"),
  ];

export const ListadoEmpresa:React.FC = () => {
    return(
        <div>
        <h2> Listado de personal para la empresa (utilizando clases privadas y publicas)</h2>
        <ul>
            {empleados.map((empleado,index) => (
                <li key={index}>{empleado.Info()}</li>
            ))}
        </ul>
    </div>
    )

}