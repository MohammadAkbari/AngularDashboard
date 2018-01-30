import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Employee } from "./employee.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class EmployeeRepository {

    constructor(private http: Http, @Inject("BASE_URL") private baseUrl: string) {
    }

    getList(): Observable<Employee[]> {

        return this.http.get(this.baseUrl + "api/employee/list")
            .map(response => response.json() as Employee[]);
    }

    create(employee: Employee): Observable<any> {

        return this.http.post(this.baseUrl + "api/employee/create", employee)
            .map(response => {

                if (response.ok) {
                    console.log(response.statusText);
                } else {
                    console.log(response.statusText);
                }

                return response;
            })
            .catch(error => {
                console.log(error);
                return Observable.throw(error.json().error || "Server error");
            });
    }  
}