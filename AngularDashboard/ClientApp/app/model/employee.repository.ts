import { Injectable, Inject } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
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

    fileUpload(files: FileList): Observable<any>{

        let formData = new FormData();
        let headers = new Headers();
        let options = new RequestOptions();
        options.headers = headers;

        for (let j = 0; j < files.length; j++) {
            formData.append("files", files[j], files[j].name);
        }

        return this.http.post(this.baseUrl + "api/employee/upload", formData, options)
            .map(response => {

                if (response.ok) {

                    var uploadResult = response.json() as UploadResult;

                    return uploadResult.path;
                } else {
                    console.log(response.statusText);
                }
            })
            .catch(error => {
                console.log(error);
                return Observable.throw(error.json().error || "Server error");
            });
    }
}

class UploadResult {
    path: string;
}