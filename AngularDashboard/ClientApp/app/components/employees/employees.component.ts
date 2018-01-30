import { Component} from "@angular/core";

import { Employee } from "./../../model/employee.model";
import { EmployeeRepository } from "./../../model/employee.repository";

@Component({
    selector: "employees",
    templateUrl: "./employees.component.html"
})
export class EmployeesComponent {

    public employees: Employee[];

    constructor(private repository: EmployeeRepository) {

        repository.getList().subscribe(response => this.employees = response);
    }
}