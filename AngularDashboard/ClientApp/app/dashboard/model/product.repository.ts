import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { Option } from "./option.model";
import "rxjs/add/operator/map";

@Injectable()
export class ProductRepository {

    constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string) {
    }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.baseUrl + "api/product/list")
            .map(response => response as Product[]);
    }

    getProductsByColors(colors: string[]): Observable<Product[]> {

        let httpParams = new HttpParams();

        httpParams.set("colors", colors.join(","));

        return this.http.get(this.baseUrl + "api/product/list", { params: httpParams })
            .map(response => response as Product[]);
    }

    getColors(): Observable<Option[]> {
        return this.http.get(this.baseUrl + "api/product/colors")
            .map(response => {
                var list = response as string[];
                return list.map(item => new Option(item));
            });
    }
}