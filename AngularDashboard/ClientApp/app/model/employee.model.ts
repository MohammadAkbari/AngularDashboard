import { IdName } from "./idname.model";

export class Employee {
     employeeId: number;
     lastName: string;
     firstName: string;
     title: string;
     titleOfCourtesy: string;
     birthDate: Date;
     hireDate: Date;
     address: string;
     city: string;
     region: string;
     postalCode: string;
     countryId: number;
     country: IdName;
     homePhone: string;
     extension: string;
     photoBase64: string;
     notes: string;
     photoPath: string;
     stateId: number;
}