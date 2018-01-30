import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from "./../../model/employee.model";
import { EmployeeRepository } from "./../../model/employee.repository";

@Component({
    selector: "create-employess",
    templateUrl: "./createemployee.component.html"
})
export class CreateTopicComponent {

    model = new Employee();

    constructor(private repository: EmployeeRepository, private router: Router) {

    }

    submitted = false;

    onSubmit() {

        this.repository.create(this.model).subscribe(response => {
            this.router.navigateByUrl("/employees");
        });
    }
}
