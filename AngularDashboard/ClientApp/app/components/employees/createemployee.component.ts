import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Employee } from "./../../model/employee.model";
import { IdName } from "./../../model/idName.model";
import { EmployeeRepository } from "./../../model/employee.repository";
import { AddressRepository } from "./../../model/address.repository";


@Component({
    selector: "create-employess",
    templateUrl: "./createemployee.component.html"
})
export class CreateEmployeeComponent {

    model = new Employee();
    public countries: IdName[];
    public states: IdName[];
    public cities: IdName[];

    constructor(private employeeRepository: EmployeeRepository, private addressRepository: AddressRepository, private router: Router) {

        this.addressRepository.getCountries()
            .subscribe(response => {
                this.countries = response;
            });
    }

    search = (text$: Observable<string>) =>
        text$
        .debounceTime(200)
        .distinctUntilChanged()
        .map(term => term.length < 2 ? []
            : this.countries.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

    searchState = (text$: Observable<string>) =>
        text$
        .debounceTime(200)
        .distinctUntilChanged()
        .map(term => term.length < 2 ? []
                : this.states.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

    searchCity = (text$: Observable<string>) =>
        text$
        .debounceTime(200)
        .distinctUntilChanged()
        .map(term => term.length < 2 ? []
            : this.cities.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

    submitted = false;

    formatter = (x: IdName) => x.name;

    selectCountry = (event: any) => {

        this.model.countryId = event.item.id;

        this.addressRepository.getStates(this.model.countryId)
            .subscribe(response => this.states = response);
    } 

    selectState = (event: any) => {

        this.model.stateId = event.item.id;

        this.addressRepository.getCities(this.model.stateId)
            .subscribe(response => this.cities = response);
    } 

    fileuploaderFileChange = (files: FileList) => {

        if (files.length > 0) {

            this.employeeRepository.fileUpload(files).subscribe(response => {

                this.model.photoPath = response;

                console.log(`Path: ${response}`);
            });
        }
    }

    onSubmit() { 

        this.employeeRepository.create(this.model).subscribe(response => {
            this.router.navigateByUrl("/employees");
        });
    }
}
