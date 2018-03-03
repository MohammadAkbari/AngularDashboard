import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Employee } from "./employee.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class EmployeeRepository {

    constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string) {
    }

    getHeader(): HttpHeaders {
        const headers = new HttpHeaders();
        const authToken = localStorage.getItem("auth_token");
        headers.append("Authorization", `Bearer ${authToken}`);

        return headers;
    }

    getList(): Observable<Employee[]> {

        const headers = this.getHeader();

        return this.http.get(this.baseUrl + "api/employee/list", { headers})
            .map(response => response as Employee[]);
    }

    create(employee: Employee): Observable<any> {

        const headers = this.getHeader();

        return this.http.post(this.baseUrl + "api/employee/create", employee, { headers })
            .map(response => {

                //if (response.status) {
                //    console.log(response.);
                //} else {
                //    console.log(response.statusText);
                //}

                return response;
            })
            .catch(error => {
                console.log(error);
                return Observable.throw(error.error || "Server error");
            });
    }

    fileUpload(files: FileList): Observable<any>{

        const headers = this.getHeader();

        const formData = new FormData();

        for (let j = 0; j < files.length; j++) {
            formData.append("files", files[j], files[j].name);
        }

        return this.http.post(this.baseUrl + "api/employee/upload", formData, { headers})
            .map(response => {

                //if (response.ok) {

                    var uploadResult = response as UploadResult;

                    return uploadResult.path;
                //} else {
                //    console.log(response.statusText);
                //}
            })
            .catch(error => {
                console.log(error);
                return Observable.throw(error.error || "Server error");
            });
    }
}

interface UploadResult {
    path: string;
}