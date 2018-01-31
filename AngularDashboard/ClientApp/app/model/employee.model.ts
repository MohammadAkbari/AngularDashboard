import { IdName } from "./idname.model";
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

export class Employee {
     employeeId: number;
     lastName: string;
     firstName: string;
     title: string;
     titleOfCourtesy: string;
     birthDate: string;
     hireDate: string;
     address: string;
     postalCode: string;
     country: string;
     region: string;
     city: string;
     homePhone: string;
     extension: string;
     photoBase64: string;
     notes: string;
     photoPath: string;
}

export class ExtendedEmployee extends Employee {
    countryObj: IdName;
    regionObj: IdName;
    cityObj: IdName;
    birthDateObj: NgbDate;
    hireDateObj: NgbDate;
}