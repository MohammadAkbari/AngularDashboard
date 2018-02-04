import { Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IdName } from "./idName.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class AddressRepository {

    constructor(private http: Http, @Inject("BASE_URL") private baseUrl: string) {
    }

    getCountries(): Observable<IdName[]> {

        return this.http.get(this.baseUrl + "api/address/countries")
            .map(response => response.json() as IdName[]);
    } 

    getStates(countryId: number): Observable<IdName[]> {

        return this.http.get(this.baseUrl + `api/address/states/${countryId}`)
            .map(response => response.json() as IdName[]);
    } 

    getCities(stateId: number): Observable<IdName[]> {

        return this.http.get(this.baseUrl + `api/address/cities/${stateId}`)
            .map(response => response.json() as IdName[]);
    } 
}