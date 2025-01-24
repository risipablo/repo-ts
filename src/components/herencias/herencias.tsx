import React from "react";

interface Persona{
    nombre:string;
    edad:number;
    email:string;
}

// interface extendida para los empleados
interface Empleado extends Persona{
    idEmpleado: number;
    puesto:string;
}

// interface extendida para gerente
interface Gerente extends Empleado{
    departamento: string;
}

// clase base para Persona
class PersonaBase implements Persona{
    constructor(public nombre:string, public edad: number, public email:string ){}

    describir():string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Email:${this.email}`
    }
}

// Clase Empleado que hereda de PersonaBase e implementa la interfaz Empleado
class EmpleadoBase extends PersonaBase implements Empleado{
    constructor(
        nombre:string,
        edad:number,
        email:string,
        public idEmpleado: number,
        public puesto: string
    ) {
        super(nombre,edad,email)
    }

    describir(): string {
        return `${super.describir()}, ID Empleado: ${this.idEmpleado}, Puesto: ${this.puesto}`;
    }
}

// Clase Gerente que hereda de EmpleadoBase e implementa la interfaz Gerente
class GerenteBase extends EmpleadoBase implements Gerente{
    constructor(
        nombre: string,
        edad: number,
        email: string,
        idEmpleado: number,
        puesto: string,
        public departamento: string
    ) {
        super(nombre,edad,email,idEmpleado,puesto)
    }
    describir(): string {
        return `${super.describir()}, Departamento: ${this.departamento}`;
    }
}

export const Herencia: React.FC = () => {
    const empleado1 = new EmpleadoBase("Juan", 30, "juan@example.com", 101, "Desarrollador");
    const gerente1 = new GerenteBase("Laura", 40, "laura@example.com", 201, "Gerente", "Tecnología");

    // Guardar las descripciones en un array
    const descripciones = [
        empleado1.describir(),
        gerente1.describir()
    ];

    return (
        <div>
            <h2>Información del Personal</h2>
            <ul>
                {descripciones.map((descripcion, index) => (
                    <li key={index}>{descripcion}</li>
                ))}
            </ul>
        </div>
    );
}