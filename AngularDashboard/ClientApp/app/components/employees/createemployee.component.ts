import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Employee, ExtendedEmployee } from "./../../model/employee.model";
import { IdName } from "./../../model/idName.model";
import { EmployeeRepository } from "./../../model/employee.repository";
import { AddressRepository } from "./../../model/address.repository";


@Component({
    selector: "create-employess",
    templateUrl: "./createemployee.component.html"
})
export class CreateEmployeeComponent {

    model = new ExtendedEmployee();
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
        this.model.country = event.item.name;
        this.addressRepository.getStates(event.item.id)
            .subscribe(response => this.states = response);
    } 

    selectState = (event: any) => {
        this.model.region = event.item.name;
        this.addressRepository.getCities(event.item.id)
            .subscribe(response => this.cities = response);
    } 

    selectCity = (event: any) => {
        this.model.city = event.item.name;
        this.addressRepository.getCities(event.item.id)
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

        var employee = new Employee();

        employee.lastName = this.model.lastName;
        employee.firstName = this.model.firstName;
        employee.title = this.model.title;
        employee.titleOfCourtesy = this.model.titleOfCourtesy;
        employee.birthDate = `${this.model.birthDateObj.year}/${this.model.birthDateObj.month}/${this.model.birthDateObj.day}`;
        employee.hireDate = `${this.model.hireDateObj.year}/${this.model.hireDateObj.month}/${this.model.hireDateObj.day}`;
        employee.address = this.model.address;
        employee.postalCode = this.model.postalCode;
        employee.country = this.model.country;
        employee.region = this.model.region;
        employee.city = this.model.city;
        employee.homePhone = this.model.homePhone;
        employee.extension = this.model.extension;
        employee.notes = this.model.notes;
        employee.photoPath = this.model.photoPath;

        this.employeeRepository.create(employee).subscribe(response => {
            //this.router.navigateByUrl("/employees");
        });
    }
}
