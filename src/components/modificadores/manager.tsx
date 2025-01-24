import { Empleado } from "./empleados";

export class Manager extends Empleado{
    private department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary)
        this.department = department
    }

    public getDepartment() : string {
        return this.department
    }

    public setDepartment(department: string):void {
        this.department = department;
    }

    public Info(): JSX.Element {
        return (
            <div>
                {super.Info()}
                <p>Departamento: {this.getDepartment()}</p>
            </div>
        )
    }
}