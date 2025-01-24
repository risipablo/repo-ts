

export class Empleado {
    public name:string;
    private salary: number;

    constructor(name: string, salary: number){
        this.name = name; 
        this.salary = salary;
    }

    public getSalary(): number{
        return this.salary
    }

    public setSalary(salary: number): void {
        this.salary = salary
    }

    public Info(): JSX.Element {
        return (
            <div>
                <p>Nombre: {this.name}</p>
                <p>Salario: {this.getSalary()}</p>
            </div>
        )
    }
}